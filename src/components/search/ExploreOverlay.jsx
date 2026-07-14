import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MapCanvas from "../map/MapCanvas";

/**
 * Generic "search everything, preview a result" overlay — shared across atlas modules.
 * `search` (query, opts) => Location[] and `mapGeo` are supplied by the caller (see
 * modules/bharat/components/BharatSearchOverlay.jsx-equivalent wiring), so this component
 * has no knowledge of which module's data or geography it's showing. `withRevealPath`
 * (optional, defaults to identity) is the same module-specific helper GameScreen uses to
 * attach an approximate multi-state connecting line — passed in rather than imported, so
 * this stays geography-agnostic like everything else here.
 */
export default function ExploreOverlay({
  open,
  onClose,
  initialLocation = null,
  search,
  mapGeo,
  categoryLabels = {},
  withRevealPath = (location) => location,
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (open) {
      setSelected(initialLocation);
    } else {
      setQuery("");
      setSelected(null);
    }
    // Only re-run when the overlay opens/closes or a new initial location is handed in,
    // not on every render (selected/query change locally as the user browses).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initialLocation]);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const results = useMemo(() => (query.trim() ? search(query, { limit: 15 }) : []), [query, search]);

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
            className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-2xl dark:border-white/10 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-line p-3 dark:border-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-ink-muted dark:text-white/50">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelected(null);
                }}
                placeholder="Search any location — mountains, rivers, passes, parks…"
                className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted dark:text-white"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full px-2 py-1 text-xs text-ink-muted hover:bg-surface dark:text-white/50 dark:hover:bg-white/10"
              >
                Esc
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {selected ? (
                <div className="flex flex-col gap-3 p-4">
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="self-start text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    ← Back to results
                  </button>
                  <div className="h-56 overflow-hidden rounded-xl sm:h-64">
                    <MapCanvas
                      disabled
                      key={selected.id}
                      mapGeo={mapGeo}
                      focusCenter={[selected.coordinates.lng, selected.coordinates.lat]}
                      focusZoom={selected.category === "state" ? 2.2 : 4}
                      highlightStateNames={selected.states}
                      highlightStatus="correct"
                      revealLocation={withRevealPath(selected)}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-500 dark:text-brand-400">
                      {categoryLabels[selected.category] ?? selected.category}
                    </p>
                    <p className="font-display text-lg font-semibold text-ink dark:text-white">{selected.name}</p>
                    <p className="mt-1 text-sm text-ink-muted dark:text-white/70">{selected.description}</p>
                    <div className="mt-2 rounded-xl bg-brand-50 p-3 text-sm text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
                      {selected.importance}
                    </div>
                  </div>
                </div>
              ) : results.length > 0 ? (
                <ul>
                  {results.map((loc) => (
                    <li key={loc.id}>
                      <button
                        type="button"
                        onClick={() => setSelected(loc)}
                        className="flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left hover:bg-surface dark:hover:bg-white/5"
                      >
                        <span className="font-medium text-ink dark:text-white">{loc.name}</span>
                        <span className="text-xs text-ink-muted dark:text-white/50">
                          {categoryLabels[loc.category] ?? loc.category}
                          {loc.states?.[0] && ` · ${loc.states[0]}`}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : query.trim() ? (
                <p className="p-6 text-center text-sm text-ink-muted dark:text-white/50">No matches for &quot;{query}&quot;</p>
              ) : (
                <p className="p-6 text-center text-sm text-ink-muted dark:text-white/50">
                  Start typing to search across every location on the map.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
