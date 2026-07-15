import AppShell from "../../../components/layout/AppShell";
import MapWithPanel from "../../../components/game/MapWithPanel";
import QuestionPanel from "../../../components/game/QuestionPanel";
import FeedbackCard from "../../../components/game/FeedbackCard";
import StatsTriggerButton from "../../../components/game/StatsTriggerButton";
import FilterPanel from "../../../components/filters/FilterPanel";
import SearchTriggerButton from "../../../components/search/SearchTriggerButton";
import { useGameSession } from "../hooks/useGameSession";
import { BIHAR_MAP_GEO, withRevealPath } from "../engine/geo";
import { getByIds } from "../../../data/bihar";
import { DIVISIONS } from "../../../data/bihar/schema";

/** Mirrors src/modules/bharat/components/GameScreen.jsx exactly — `districts`/`division`
 * in place of `states`/`region`, FilterPanel's secondary dimension swapped to Bihar's real
 * divisions via its new secondaryFilterKey/secondaryFilterLabel props. */
export default function GameScreen({ modeId, topicFilter, title, onBack, onOpenSearch, onOpenStats, onNavigateHome }) {
  const {
    mode,
    question,
    phase,
    result,
    filters,
    setFilters,
    submitClick,
    next,
    previous,
    reviewingPrevious,
    showPrevious,
    overallStats,
    poolSize,
  } = useGameSession(modeId, topicFilter);
  const isFeedback = phase === "feedback" && question && result;
  const showFeedbackCard = reviewingPrevious || isFeedback;
  const displayedQuestion = reviewingPrevious ? previous.question : question;
  const displayedResult = reviewingPrevious ? previous.result : result;

  return (
    <AppShell
      onBack={onBack}
      brandName="Bihar Atlas"
      onNavigateHome={onNavigateHome}
      subtitle={title ?? mode.label}
      stats={overallStats}
      actions={
        <>
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            poolSize={poolSize}
            regions={DIVISIONS}
            secondaryFilterKey="division"
            secondaryFilterLabel="Division"
          />
          <SearchTriggerButton onClick={onOpenSearch} />
          <StatsTriggerButton onClick={onOpenStats} />
        </>
      }
    >
      <MapWithPanel
        mapProps={{
          mapGeo: BIHAR_MAP_GEO,
          onMapClick: submitClick,
          disabled: reviewingPrevious || phase !== "asking",
          highlightStateNames: showFeedbackCard ? displayedQuestion.districts : null,
          highlightStatus: showFeedbackCard ? (displayedResult.isCorrect ? "correct" : "wrong") : null,
          revealLocation: showFeedbackCard ? withRevealPath(displayedQuestion) : null,
          userClickPoint: showFeedbackCard ? displayedResult.clickPoint : null,
          ariaLabel: "Map of Bihar",
        }}
      >
        {phase === "asking" && !reviewingPrevious && <QuestionPanel location={question} onSkip={next} />}
        {showFeedbackCard && (
          <FeedbackCard
            location={displayedQuestion}
            isCorrect={displayedResult.isCorrect}
            onNext={next}
            getByIds={getByIds}
            onPrevious={previous ? showPrevious : undefined}
            isReviewing={reviewingPrevious}
          />
        )}
      </MapWithPanel>
    </AppShell>
  );
}
