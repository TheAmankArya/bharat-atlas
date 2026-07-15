import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GameScreen from "./components/GameScreen";
import ChallengeScreen from "./components/ChallengeScreen";
import HomeScreen from "./components/HomeScreen";
import DistrictExplorerPage from "./components/districtExplorer/DistrictExplorerPage";
import DistrictDetailPage from "./components/districtExplorer/DistrictDetailPage";
import StatsDashboard from "../../components/game/StatsDashboard";
import ExploreOverlay from "../../components/search/ExploreOverlay";
import { MODES } from "./engine/modes";
import { getState } from "./engine/storage";
import { BIHAR_MAP_GEO, withRevealPath } from "./engine/geo";
import { search } from "../../data/bihar";

const FADE = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } };

const CATEGORY_LABELS = {
  district: "District",
  division: "Division",
  river: "River",
  hill: "Hill",
  plateau: "Plateau",
  waterfall: "Waterfall",
  dam: "Dam",
  barrage: "Barrage",
  canal: "Canal",
  wetland: "Wetland",
  soil: "Soil region",
  "protected-area": "Protected area",
  heritage: "Heritage site",
  resource: "Resource",
};

/**
 * Bihar Atlas, fully self-contained: owns its own routing (home/game/challenge/district
 * explorer), its own search + stats modals (wired to its own data/engine), and its own
 * progress storage. Mirrors src/modules/bharat/BharatApp.jsx's exact shape, extended with
 * two Bihar-only launch types (`explorer`, `district`) for the District Explorer feature.
 * `onExit` returns to the top-level atlas picker — nothing else here reaches outside this
 * module's own folder except the generic, module-agnostic pieces under src/components.
 */
export default function BiharApp({ onExit }) {
  // null = Bihar home. Otherwise one of:
  //   { type: "mode", modeId, topicFilter, title }      — a plain or topic-narrowed mode
  //   { type: "challenge", questions, title, modeId }    — a finite, ordered question set
  //   { type: "explorer" }                               — District Explorer (map + grid)
  //   { type: "district", district }                     — a single district's detail page
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
  const openExplorer = () => setLaunch({ type: "explorer" });
  const openDistrict = (district) => setLaunch({ type: "district", district });

  const launchTopic = (topic) =>
    setLaunch({
      type: "mode",
      modeId: topic.modeId,
      topicFilter: { subcategory: topic.subcategory, tag: topic.tag },
      title: topic.label,
    });

  const handleQuickStart = (key) => {
    if (key === "mixed") setLaunch({ type: "mode", modeId: "mixed", topicFilter: null, title: null });
    // "topic"/"explorer"/"search" are handled inside HomeScreen itself and never reach here.
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
                onOpenDistrictExplorer={openExplorer}
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
          ) : launch.type === "explorer" ? (
            <motion.div key="explorer" className="absolute inset-0" {...FADE}>
              <DistrictExplorerPage onSelectDistrict={openDistrict} onBack={goHome} onNavigateHome={onExit} />
            </motion.div>
          ) : launch.type === "district" ? (
            <motion.div key="district" className="absolute inset-0" {...FADE}>
              <DistrictDetailPage
                district={launch.district}
                onSelectDistrict={openDistrict}
                onPractice={() => setLaunch({ type: "mode", modeId: "district", topicFilter: null, title: null })}
                onBack={openExplorer}
                onNavigateHome={onExit}
              />
            </motion.div>
          ) : (
            <motion.div key="challenge" className="absolute inset-0" {...FADE}>
              <ChallengeScreen
                questions={launch.questions}
                modeId={launch.modeId}
                title={launch.title}
                onBack={goHome}
                onNavigateHome={onExit}
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
        mapGeo={BIHAR_MAP_GEO}
        categoryLabels={CATEGORY_LABELS}
        withRevealPath={withRevealPath}
      />
      <StatsDashboard open={statsOpen} onClose={() => setStatsOpen(false)} modes={MODES} getState={getState} />
    </>
  );
}
