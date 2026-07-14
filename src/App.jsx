import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import BharatApp from "./modules/bharat/BharatApp";
import BiharApp from "./modules/bihar/BiharApp";
import { setTabVisible, unlockMusicOnGesture } from "./shared/engine/musicEngine";

const FADE = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } };

/** The platform shell: picks which atlas module is active. Each module is fully
 * self-contained (own routing, own data, own progress storage) — adding a real Bihar
 * Atlas later is purely additive here, never a change to Bharat's code. */
export default function App() {
  const [activeModule, setActiveModule] = useState(null); // null | "bharat" | "bihar"

  // Browsers block audio until a real user gesture, so the ambient background track
  // (if enabled in preferences) only actually starts on the visitor's first interaction,
  // wherever it happens across the whole site.
  useEffect(() => {
    const unlock = () => unlockMusicOnGesture();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!activeModule ? (
          <motion.div key="home" className="absolute inset-0" {...FADE}>
            <HomePage onSelectBharat={() => setActiveModule("bharat")} onSelectBihar={() => setActiveModule("bihar")} />
          </motion.div>
        ) : activeModule === "bharat" ? (
          <motion.div key="bharat" className="absolute inset-0" {...FADE}>
            <BharatApp onExit={() => setActiveModule(null)} />
          </motion.div>
        ) : (
          <motion.div key="bihar" className="absolute inset-0" {...FADE}>
            <BiharApp onExit={() => setActiveModule(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
