import AppShell from "../../../components/layout/AppShell";
import MapWithPanel from "../../../components/game/MapWithPanel";
import QuestionPanel from "../../../components/game/QuestionPanel";
import FeedbackCard from "../../../components/game/FeedbackCard";
import { useChallengeSession } from "../hooks/useChallengeSession";
import { BHARAT_MAP_GEO } from "../engine/geo";
import { getByIds } from "../../../data/bharat";

/** Drives a fixed, ordered question set (Daily Challenge / Random Question) through to a
 * completion summary — the same visual language as GameScreen, but a finite session. */
export default function ChallengeScreen({ questions, modeId, title, onBack, onComplete, onNavigateHome }) {
  const {
    question,
    phase,
    result,
    index,
    total,
    isComplete,
    outcomes,
    submitClick,
    next,
    skip,
    previousQuestion,
    previousResult,
    previousIndex,
    reviewingPrevious,
    showPrevious,
  } = useChallengeSession(questions, { modeId, onComplete });
  const isFeedback = phase === "feedback" && question && result;
  const showFeedbackCard = reviewingPrevious || isFeedback;
  const displayedQuestion = reviewingPrevious ? previousQuestion : question;
  const displayedResult = reviewingPrevious ? previousResult : result;
  const displayedIndex = reviewingPrevious ? previousIndex : index;

  if (isComplete) {
    const correctCount = outcomes.filter((o) => o === "correct").length;
    const wrongCount = outcomes.filter((o) => o === "wrong").length;
    const skippedCount = outcomes.filter((o) => o === "skipped").length;

    return (
      <AppShell onBack={onBack} brandName="Bharat Atlas" onNavigateHome={onNavigateHome} subtitle={title}>
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="text-5xl" aria-hidden>
            🎉
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Challenge complete!</h2>
          <p className="text-ink-muted dark:text-white/60">
            <span className="font-semibold text-correct">{correctCount} correct</span> ·{" "}
            <span className="font-semibold text-wrong">{wrongCount} wrong</span>
            {skippedCount > 0 && ` · ${skippedCount} skipped`} out of {total}
          </p>
          <button
            type="button"
            onClick={onBack}
            className="mt-3 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Back to Home
          </button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell
      onBack={onBack}
      brandName="Bharat Atlas"
      onNavigateHome={onNavigateHome}
      subtitle={`${title} · ${displayedIndex + 1} of ${total}${reviewingPrevious ? " (reviewing)" : ""}`}
    >
      <MapWithPanel
        mapProps={{
          mapGeo: BHARAT_MAP_GEO,
          onMapClick: submitClick,
          disabled: reviewingPrevious || phase !== "asking",
          highlightStateName: showFeedbackCard && displayedQuestion.category === "state" ? displayedQuestion.name : null,
          highlightStatus: showFeedbackCard ? (displayedResult.isCorrect ? "correct" : "wrong") : null,
          // Every category gets the pinpoint marker, including "state" — a polygon tint
          // alone is invisible for tiny union territories like Lakshadweep or Chandigarh,
          // so the marker is what actually shows the user where the right answer was.
          revealLocation: showFeedbackCard ? displayedQuestion : null,
          userClickPoint: showFeedbackCard ? displayedResult.clickPoint : null,
          ariaLabel: "Map of India",
        }}
      >
        {phase === "asking" && !reviewingPrevious && <QuestionPanel location={question} onSkip={skip} />}
        {showFeedbackCard && (
          <FeedbackCard
            location={displayedQuestion}
            isCorrect={displayedResult.isCorrect}
            onNext={next}
            getByIds={getByIds}
            onPrevious={previousQuestion ? showPrevious : undefined}
            isReviewing={reviewingPrevious}
          />
        )}
      </MapWithPanel>
    </AppShell>
  );
}
