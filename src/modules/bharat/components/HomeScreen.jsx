import AppShell from "../../../components/layout/AppShell";
import SearchTriggerButton from "../../../components/search/SearchTriggerButton";
import StatsTriggerButton from "../../../components/game/StatsTriggerButton";
import HeroSection from "./HeroSection";
import QuickStartGrid from "./QuickStartGrid";
import CategoryBlocks from "./CategoryBlocks";
import ProgressStrip from "./ProgressStrip";
import DailyChallengeCard from "./DailyChallengeCard";
import InlineSearch from "./InlineSearch";
import Footer from "./Footer";
import { getState } from "../engine/storage";
import { getDailyChallengeDateKey } from "../engine/dailyChallenge";

const CATEGORIES_SECTION_ID = "categories";

function scrollToCategories() {
  document.getElementById(CATEGORIES_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomeScreen({
  onSelectTopic,
  onQuickStart,
  onSelectSearchResult,
  onOpenSearch,
  onOpenStats,
  onNavigateHome,
}) {
  const { overallStats, dailyChallenge } = getState();
  const completedToday = dailyChallenge?.dateKey === getDailyChallengeDateKey() ? dailyChallenge : null;

  return (
    <AppShell
      onBack={onNavigateHome}
      backLabel="Back to atlas selection"
      brandName="Bharat Atlas"
      onNavigateHome={onNavigateHome}
      actions={
        <>
          <SearchTriggerButton onClick={onOpenSearch} />
          <StatsTriggerButton onClick={onOpenStats} />
        </>
      }
    >
      <HeroSection onStartPracticing={() => onQuickStart("mixed")} onBrowseTopics={scrollToCategories} />
      <QuickStartGrid onSelect={(key) => (key === "topic" ? scrollToCategories() : onQuickStart(key))} />
      <CategoryBlocks sectionId={CATEGORIES_SECTION_ID} onSelectTopic={onSelectTopic} />
      <ProgressStrip stats={overallStats} />
      <DailyChallengeCard onStart={() => onQuickStart("daily")} completedToday={completedToday} />
      <InlineSearch onSelectLocation={onSelectSearchResult} />
      <Footer />
    </AppShell>
  );
}
