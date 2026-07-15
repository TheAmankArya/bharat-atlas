import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getMode } from "../engine/modes";
import { getQuestionPool, pickNextQuestion, checkAnswer } from "../engine/questionEngine";
import { getState, recordAttempt, setFilters as persistFilters } from "../engine/storage";
import { playCorrectSound, playWrongSound } from "../../../shared/engine/sound";

/**
 * Mirrors src/modules/bharat/hooks/useGameSession.js exactly — `division` in place of
 * `region` as the filter dimension (Bihar's real 9 divisions instead of India's
 * north/south/east/west macro-regions), everything else identical including the
 * one-step-back review and the synchronous-first-question fix.
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

  const [question, setQuestion] = useState(() =>
    pickNextQuestion(pool, { excludeId: null, perLocationStats: storageState.perLocation })
  );
  const [phase, setPhase] = useState("asking"); // "asking" | "feedback"
  const [result, setResult] = useState(null); // { isCorrect, clickPoint }

  const [previous, setPrevious] = useState(null); // { question, result } | null
  const [reviewingPrevious, setReviewingPrevious] = useState(false);

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
    if (isMount.current) {
      isMount.current = false;
      return;
    }
    advance(null);
    setPrevious(null);
    setReviewingPrevious(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode.id, filters.difficulty, filters.division, topicFilter?.subcategory, topicFilter?.tag]);

  const submitClick = useCallback(
    (point) => {
      if (reviewingPrevious || phase !== "asking" || !question) return;
      const isCorrect = checkAnswer(question, point);
      const updated = recordAttempt({ modeId: mode.id, locationId: question.id, isCorrect });
      setStorageState(updated);
      setResult({ isCorrect, clickPoint: point });
      setPhase("feedback");
      (isCorrect ? playCorrectSound : playWrongSound)();
    },
    [reviewingPrevious, phase, question, mode.id]
  );

  const next = useCallback(() => {
    if (reviewingPrevious) {
      setReviewingPrevious(false);
      return;
    }
    setPrevious(result ? { question, result } : null);
    advance(question?.id ?? null);
  }, [advance, question, result, reviewingPrevious]);

  const showPrevious = useCallback(() => {
    if (!previous) return;
    setReviewingPrevious(true);
  }, [previous]);

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
    previous,
    reviewingPrevious,
    showPrevious,
    poolSize: pool.length,
    overallStats: storageState.overallStats,
    modeStats: storageState.perMode[mode.id],
  };
}
