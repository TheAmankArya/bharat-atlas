import AppShell from "../../../components/layout/AppShell";
import SearchTriggerButton from "../../../components/search/SearchTriggerButton";
import StatsTriggerButton from "../../../components/game/StatsTriggerButton";
import HeroSection from "./HeroSection";
import QuickStartGrid from "./QuickStartGrid";
import CategoryBlocks from "./CategoryBlocks";
import ProgressStrip from "./ProgressStrip";
import ComingSoonSection from "./ComingSoonSection";
import InlineSearch from "./InlineSearch";
import Footer from "./Footer";
import { getState } from "../engine/storage";

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
  onOpenDistrictExplorer,
  onNavigateHome,
}) {
  const { overallStats } = getState();

  return (
    <AppShell
      onBack={onNavigateHome}
      backLabel="Back to atlas selection"
      brandName="Bihar Atlas"
      onNavigateHome={onNavigateHome}
      actions={
        <>
          <SearchTriggerButton onClick={onOpenSearch} />
          <StatsTriggerButton onClick={onOpenStats} />
        </>
      }
    >
      <HeroSection onStartPracticing={() => onQuickStart("mixed")} onBrowseTopics={scrollToCategories} />
      <QuickStartGrid
        onSelect={(key) => {
          if (key === "topic") scrollToCategories();
          else if (key === "explorer") onOpenDistrictExplorer();
          else if (key === "search") onOpenSearch();
          else onQuickStart(key);
        }}
      />
      <CategoryBlocks sectionId={CATEGORIES_SECTION_ID} onSelectTopic={onSelectTopic} />
      <ProgressStrip stats={overallStats} />
      <ComingSoonSection />
      <InlineSearch onSelectLocation={onSelectSearchResult} />
      <Footer />
    </AppShell>
  );
}
