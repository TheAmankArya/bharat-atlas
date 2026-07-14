import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { computeAccuracy } from "../../shared/engine/scoring";

function StatTile({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-surface p-3 dark:bg-white/5">
      <span className="font-display text-xl font-semibold text-ink dark:text-white">{value}</span>
      <span className="text-center text-[11px] uppercase tracking-wide text-ink-muted dark:text-white/50">{label}</span>
    </div>
  );
}

/** `modes` ({id,label}[]) and `getState` (progress-store getter) come from whichever atlas
 * module is showing its own progress — this dashboard has no module-specific knowledge. */
export default function StatsDashboard({ open, onClose, modes, getState }) {
  const { overallStats, perMode } = getState();
  const accuracy = computeAccuracy(overallStats);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-16 backdrop-blur-sm sm:pt-24"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-2xl dark:border-white/10 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line p-4 dark:border-white/10">
              <p className="font-display text-lg font-semibold text-ink dark:text-white">Your Progress</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close stats"
                className="rounded-full px-2 py-1 text-xs text-ink-muted hover:bg-surface dark:text-white/50 dark:hover:bg-white/10"
              >
                Esc
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 p-4 sm:grid-cols-5">
              <StatTile label="Attempted" value={overallStats.attempted} />
              <StatTile label="Correct" value={overallStats.correct} />
              <StatTile label="Wrong" value={overallStats.wrong} />
              <StatTile label="Accuracy" value={`${accuracy}%`} />
              <StatTile label="Best Streak" value={overallStats.bestStreak} />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-muted dark:text-white/50">By mode</p>
              <ul className="space-y-1.5">
                {modes.filter((mode) => mode.id !== "mixed").map((mode) => {
                  const stats = perMode[mode.id];
                  const modeAccuracy = stats ? computeAccuracy(stats) : null;
                  return (
                    <li
                      key={mode.id}
                      className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 dark:bg-white/5"
                    >
                      <span className="text-sm text-ink dark:text-white">{mode.label}</span>
                      <span className="text-xs text-ink-muted dark:text-white/50">
                        {stats ? `${stats.attempted} attempted · ${modeAccuracy}% accuracy` : "Not started"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
