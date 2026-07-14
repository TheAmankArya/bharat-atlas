import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GameScreen from "./components/GameScreen";
import ChallengeScreen from "./components/ChallengeScreen";
import HomeScreen from "./components/HomeScreen";
import StatsDashboard from "../../components/game/StatsDashboard";
import ExploreOverlay from "../../components/search/ExploreOverlay";
import { MODES } from "./engine/modes";
import { getState, recordDailyChallengeCompletion } from "./engine/storage";
import { getDailyChallengeDateKey, getDailyChallengeQuestions, getRandomQuestion } from "./engine/dailyChallenge";
import { BHARAT_MAP_GEO, withRevealPath } from "./engine/geo";
import { search } from "../../data/bharat";

const FADE = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } };

const CATEGORY_LABELS = {
  state: "State",
  capital: "Capital",
  mountain: "Mountain range",
  hill: "Hill range",
  pass: "Mountain pass",
  peak: "Peak",
  plateau: "Plateau",
  river: "River",
  lake: "Lake",
  wetland: "Wetland",
  forest: "Forest & wildlife",
  mineral: "Mineral site",
  soil: "Soil region",
  crop: "Crop belt",
  island: "Island",
  "coastal-feature": "Coastal feature",
  unesco: "UNESCO site",
  dam: "Dam",
  industry: "Industry",
};

/**
 * Bharat Atlas, fully self-contained: owns its own routing (home/game/challenge), its own
 * search + stats modals (wired to its own data/engine), and its own progress storage.
 * `onExit` returns to the top-level atlas picker — nothing else here reaches outside this
 * module's own folder except the generic, module-agnostic pieces under src/components.
 */
export default function BharatApp({ onExit }) {
  // null = Bharat home. Otherwise one of:
  //   { type: "mode", modeId, topicFilter, title }      — a plain or topic-narrowed mode
  //   { type: "daily" | "random", questions, title }    — a finite, ordered question set
  const [launch, setLaunch] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInitialLocation, setSearchInitialLocation] = useState(null);
  const [statsOpen, setStatsOpen] = useState(false);

  const openSearch = () => {
    setSearchInitialLocation(null);
    setSearchOpen(true);
  };
  const openSearchWithLocation = (location) => {
    setSearchInitialLocation(location);
    setSearchOpen(true);
  };
  const openStats = () => setStatsOpen(true);
  const goHome = () => setLaunch(null);

  const launchTopic = (topic) =>
    setLaunch({
      type: "mode",
      modeId: topic.modeId,
      topicFilter: { subcategory: topic.subcategory, tag: topic.tag },
      title: topic.label,
    });

  const launchDaily = () => {
    const dateKey = getDailyChallengeDateKey();
    setLaunch({ type: "daily", questions: getDailyChallengeQuestions(dateKey), title: "Today's Challenge", dateKey });
  };

  const launchRandom = () =>
    setLaunch({ type: "random", questions: [getRandomQuestion()], title: "Random Question" });

  const handleQuickStart = (key) => {
    if (key === "mixed") setLaunch({ type: "mode", modeId: "mixed", topicFilter: null, title: null });
    else if (key === "daily") launchDaily();
    else if (key === "random") launchRandom();
    // "topic" is handled inside HomeScreen itself (scrolls to Categories) and never reaches here.
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {!launch ? (
            <motion.div key="home" className="absolute inset-0" {...FADE}>
              <HomeScreen
                onSelectTopic={launchTopic}
                onQuickStart={handleQuickStart}
                onSelectSearchResult={openSearchWithLocation}
                onOpenSearch={openSearch}
                onOpenStats={openStats}
                onNavigateHome={onExit}
              />
            </motion.div>
          ) : launch.type === "mode" ? (
            <motion.div key="game" className="absolute inset-0" {...FADE}>
              <GameScreen
                modeId={launch.modeId}
                topicFilter={launch.topicFilter}
                title={launch.title}
                onBack={goHome}
                onOpenSearch={openSearch}
                onOpenStats={openStats}
                onNavigateHome={onExit}
              />
            </motion.div>
          ) : (
            <motion.div key="challenge" className="absolute inset-0" {...FADE}>
              <ChallengeScreen
                questions={launch.questions}
                modeId={launch.type}
                title={launch.title}
                onBack={goHome}
                onNavigateHome={onExit}
                onComplete={
                  launch.type === "daily"
                    ? (outcomes) =>
                        recordDailyChallengeCompletion({
                          dateKey: launch.dateKey,
                          correctCount: outcomes.filter((o) => o === "correct").length,
                          totalCount: outcomes.length,
                        })
                    : undefined
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ExploreOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        initialLocation={searchInitialLocation}
        search={search}
        mapGeo={BHARAT_MAP_GEO}
        categoryLabels={CATEGORY_LABELS}
        withRevealPath={withRevealPath}
      />
      <StatsDashboard open={statsOpen} onClose={() => setStatsOpen(false)} modes={MODES} getState={getState} />
    </>
  );
}
