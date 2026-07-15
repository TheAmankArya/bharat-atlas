import { useCallback, useState } from "react";
import { checkAnswer } from "../engine/questionEngine";
import { recordAttempt } from "../engine/storage";
import { playCorrectSound, playWrongSound } from "../../../shared/engine/sound";

/** Mirrors src/modules/bharat/hooks/useChallengeSession.js exactly — drives a fixed,
 * ordered question list rather than useGameSession's infinite weighted-random pool. */
export function useChallengeSession(questions, { modeId = "challenge", onComplete } = {}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("asking"); // "asking" | "feedback"
  const [result, setResult] = useState(null); // { isCorrect, clickPoint }
  const [outcomes, setOutcomes] = useState([]);

  const [previous, setPrevious] = useState(null); // { index, result } | null
  const [reviewingPrevious, setReviewingPrevious] = useState(false);

  const question = questions[index] ?? null;
  const isComplete = index >= questions.length;

  const submitClick = useCallback(
    (point) => {
      if (reviewingPrevious || phase !== "asking" || !question) return;
      const isCorrect = checkAnswer(question, point);
      recordAttempt({ modeId, locationId: question.id, isCorrect });
      setResult({ isCorrect, clickPoint: point });
      setPhase("feedback");
      (isCorrect ? playCorrectSound : playWrongSound)();
    },
    [reviewingPrevious, phase, question, modeId]
  );

  const advance = useCallback(
    (outcome) => {
      if (reviewingPrevious) {
        setReviewingPrevious(false);
        return;
      }
      setPrevious(result ? { index, result } : null);
      setOutcomes((prev) => {
        const updated = [...prev, outcome];
        if (index + 1 >= questions.length) onComplete?.(updated);
        return updated;
      });
      setIndex((i) => i + 1);
      setPhase("asking");
      setResult(null);
    },
    [index, questions.length, onComplete, result, reviewingPrevious]
  );

  const next = useCallback(() => advance(result?.isCorrect ? "correct" : "wrong"), [advance, result]);
  const skip = useCallback(() => advance("skipped"), [advance]);

  const showPrevious = useCallback(() => {
    if (!previous) return;
    setReviewingPrevious(true);
  }, [previous]);

  return {
    question,
    phase,
    result,
    index,
    total: questions.length,
    isComplete,
    outcomes,
    submitClick,
    next,
    skip,
    previousQuestion: previous ? questions[previous.index] : null,
    previousResult: previous?.result ?? null,
    previousIndex: previous?.index ?? null,
    reviewingPrevious,
    showPrevious,
  };
}
