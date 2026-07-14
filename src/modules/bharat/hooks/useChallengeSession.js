import { useCallback, useState } from "react";
import { checkAnswer } from "../engine/questionEngine";
import { recordAttempt } from "../engine/storage";
import { playCorrectSound, playWrongSound } from "../../../shared/engine/sound";

/**
 * Drives a FIXED, ordered list of questions (Daily Challenge, Random Question) rather
 * than useGameSession's infinite weighted-random pool. Tracks a per-question outcome
 * ("correct" | "wrong" | "skipped") and reports the finished set via `onComplete`.
 */
export function useChallengeSession(questions, { modeId = "challenge", onComplete } = {}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("asking"); // "asking" | "feedback"
  const [result, setResult] = useState(null); // { isCorrect, clickPoint }
  const [outcomes, setOutcomes] = useState([]);

  const question = questions[index] ?? null;
  const isComplete = index >= questions.length;

  const submitClick = useCallback(
    (point) => {
      if (phase !== "asking" || !question) return;
      const isCorrect = checkAnswer(question, point);
      recordAttempt({ modeId, locationId: question.id, isCorrect });
      setResult({ isCorrect, clickPoint: point });
      setPhase("feedback");
      (isCorrect ? playCorrectSound : playWrongSound)();
    },
    [phase, question, modeId]
  );

  const advance = useCallback(
    (outcome) => {
      setOutcomes((prev) => {
        const updated = [...prev, outcome];
        if (index + 1 >= questions.length) onComplete?.(updated);
        return updated;
      });
      setIndex((i) => i + 1);
      setPhase("asking");
      setResult(null);
    },
    [index, questions.length, onComplete]
  );

  const next = useCallback(() => advance(result?.isCorrect ? "correct" : "wrong"), [advance, result]);
  const skip = useCallback(() => advance("skipped"), [advance]);

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
  };
}
