import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getMode } from "../engine/modes";
import { getQuestionPool, pickNextQuestion, checkAnswer } from "../engine/questionEngine";
import { getState, recordAttempt, setFilters as persistFilters } from "../engine/storage";
import { playCorrectSound, playWrongSound } from "../../../shared/engine/sound";

/**
 * Orchestrates the core loop: pick question -> arm map for clicks -> score -> feedback -> next.
 *
 * `topicFilter` is an optional fixed narrowing applied on top of the mode's categories —
 * e.g. launching Forest & Wildlife Mode scoped to just `{ tag: "tiger-reserve" }` for a
 * "Tiger Reserves" topic chip. It's set once at launch, unlike `filters` (difficulty/region),
 * which the user can change mid-session via FilterPanel.
 */
export function useGameSession(initialModeId, topicFilter = null) {
  const [modeId, setModeId] = useState(initialModeId);
  const [storageState, setStorageState] = useState(() => getState());

  const mode = getMode(modeId);
  const filters = storageState.filters;
  const pool = useMemo(
    () => getQuestionPool(mode, { ...filters, ...topicFilter }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, filters, topicFilter?.subcategory, topicFilter?.tag]
  );

  // Picked synchronously on first render (not via an effect) so `question` is never null
  // on mount — otherwise a tap that lands in the gap before an effect flushes silently
  // no-ops against the `!question` guard in submitClick below, which reads as a dead map.
  const [question, setQuestion] = useState(() =>
    pickNextQuestion(pool, { excludeId: null, perLocationStats: storageState.perLocation })
  );
  const [phase, setPhase] = useState("asking"); // "asking" | "feedback"
  const [result, setResult] = useState(null); // { isCorrect, clickPoint }

  const advance = useCallback(
    (excludeId) => {
      const nextQuestion = pickNextQuestion(pool, { excludeId, perLocationStats: storageState.perLocation });
      setQuestion(nextQuestion);
      setPhase("asking");
      setResult(null);
    },
    [pool, storageState.perLocation]
  );

  const isMount = useRef(true);
  useEffect(() => {
    // The initial question is already picked synchronously above — skip this first run so
    // it isn't immediately discarded and replaced before the user even sees it.
    if (isMount.current) {
      isMount.current = false;
      return;
    }
    advance(null);
    // Only re-pick when the active mode/filters/topic change, not on every stats update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode.id, filters.difficulty, filters.region, topicFilter?.subcategory, topicFilter?.tag]);

  const submitClick = useCallback(
    (point) => {
      if (phase !== "asking" || !question) return;
      const isCorrect = checkAnswer(question, point);
      const updated = recordAttempt({ modeId: mode.id, locationId: question.id, isCorrect });
      setStorageState(updated);
      setResult({ isCorrect, clickPoint: point });
      setPhase("feedback");
      (isCorrect ? playCorrectSound : playWrongSound)();
    },
    [phase, question, mode.id]
  );

  const next = useCallback(() => {
    advance(question?.id ?? null);
  }, [advance, question]);

  const updateFilters = useCallback((patch) => {
    const updated = persistFilters(patch);
    setStorageState(updated);
  }, []);

  return {
    mode,
    setMode: setModeId,
    question,
    phase,
    result,
    filters,
    setFilters: updateFilters,
    submitClick,
    next,
    poolSize: pool.length,
    overallStats: storageState.overallStats,
    modeStats: storageState.perMode[mode.id],
  };
}
