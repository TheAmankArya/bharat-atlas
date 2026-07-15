import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Generic enough that every atlas module can use the defaults; pass `difficulties`/
// `regions` props to override for a module with different tiers or region names.
const DEFAULT_DIFFICULTIES = ["easy", "medium", "hard"];
const DEFAULT_REGIONS = ["north", "south", "east", "west", "northeast", "central"];

function toOptions(values, capitalize = (v) => v[0].toUpperCase() + v.slice(1)) {
  return [{ value: null, label: "All" }, ...values.map((v) => ({ value: v, label: capitalize(v) }))];
}

function OptionGroup({ label, options, value, onSelect }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-muted dark:text-white/50">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              value === opt.value
                ? "bg-brand-500 text-white"
                : "bg-surface text-ink-muted hover:bg-surface-raised dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FilterPanel({
  filters,
  onChange,
  poolSize,
  difficulties = DEFAULT_DIFFICULTIES,
  regions = DEFAULT_REGIONS,
  // Lets a module swap the second filter dimension entirely (e.g. Bihar's real divisions
  // in place of Bharat's north/south/east/west macro-regions) without duplicating this
  // component — defaults exactly preserve Bharat's existing "region" behavior.
  secondaryFilterKey = "region",
  secondaryFilterLabel = "Region",
}) {
  const [open, setOpen] = useState(false);
  const activeCount = (filters.difficulty ? 1 : 0) + (filters[secondaryFilterKey] ? 1 : 0);
  const difficultyOptions = toOptions(difficulties);
  const regionOptions = toOptions(regions, (v) => (v === "northeast" ? "Northeast" : v[0].toUpperCase() + v.slice(1)));

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Filter questions"
        className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-sm text-ink transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">Filter</span>
        {activeCount > 0 && (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
            {activeCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="fixed right-3 top-16 z-40 w-[calc(100vw-1.5rem)] max-w-xs space-y-4 rounded-2xl border border-line bg-surface-raised p-4 shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <OptionGroup
                label="Difficulty"
                options={difficultyOptions}
                value={filters.difficulty}
                onSelect={(difficulty) => onChange({ difficulty })}
              />
              <OptionGroup
                label={secondaryFilterLabel}
                options={regionOptions}
                value={filters[secondaryFilterKey]}
                onSelect={(value) => onChange({ [secondaryFilterKey]: value })}
              />
              <p className="border-t border-line pt-3 text-xs text-ink-muted dark:border-white/10 dark:text-white/50">
                {poolSize} location{poolSize === 1 ? "" : "s"} match
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
