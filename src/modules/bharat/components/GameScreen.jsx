import AppShell from "../../../components/layout/AppShell";
import MapWithPanel from "../../../components/game/MapWithPanel";
import QuestionPanel from "../../../components/game/QuestionPanel";
import FeedbackCard from "../../../components/game/FeedbackCard";
import StatsTriggerButton from "../../../components/game/StatsTriggerButton";
import FilterPanel from "../../../components/filters/FilterPanel";
import SearchTriggerButton from "../../../components/search/SearchTriggerButton";
import { useGameSession } from "../hooks/useGameSession";
import { BHARAT_MAP_GEO } from "../engine/geo";
import { getByIds } from "../../../data/bharat";

/** `topicFilter`/`title` come from a Categories chip (e.g. Forest Mode narrowed to just
 * "Tiger Reserves") — omit both for a plain mode launch, where the subtitle falls back to
 * the mode's own label. */
export default function GameScreen({ modeId, topicFilter, title, onBack, onOpenSearch, onOpenStats, onNavigateHome }) {
  const { mode, question, phase, result, filters, setFilters, submitClick, next, overallStats, poolSize } =
    useGameSession(modeId, topicFilter);
  const isFeedback = phase === "feedback" && question && result;

  return (
    <AppShell
      onBack={onBack}
      brandName="Bharat Atlas"
      onNavigateHome={onNavigateHome}
      subtitle={title ?? mode.label}
      stats={overallStats}
      actions={
        <>
          <FilterPanel filters={filters} onChange={setFilters} poolSize={poolSize} />
          <SearchTriggerButton onClick={onOpenSearch} />
          <StatsTriggerButton onClick={onOpenStats} />
        </>
      }
    >
      <MapWithPanel
        mapProps={{
          mapGeo: BHARAT_MAP_GEO,
          onMapClick: submitClick,
          disabled: phase !== "asking",
          highlightStateName: isFeedback && question.category === "state" ? question.name : null,
          highlightStatus: isFeedback ? (result.isCorrect ? "correct" : "wrong") : null,
          revealLocation: isFeedback && question.category !== "state" ? question : null,
          userClickPoint: isFeedback ? result.clickPoint : null,
          ariaLabel: "Map of India",
        }}
      >
        {phase === "asking" && <QuestionPanel location={question} onSkip={next} />}
        {isFeedback && (
          <FeedbackCard location={question} isCorrect={result.isCorrect} onNext={next} getByIds={getByIds} />
        )}
      </MapWithPanel>
    </AppShell>
  );
}
