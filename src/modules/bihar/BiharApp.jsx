import AppShell from "../../components/layout/AppShell";

const PLANNED_SECTIONS = [
  { emoji: "🗺️", label: "Geography" },
  { emoji: "📜", label: "History" },
  { emoji: "🌾", label: "Economy" },
  { emoji: "🎭", label: "Culture" },
  { emoji: "📍", label: "District Explorer" },
  { emoji: "📰", label: "Current Affairs" },
];

/**
 * Bihar Atlas — intentionally a placeholder only, per the current scope: no real content,
 * no data, no quiz modes. When Bihar Atlas is actually built, it plugs in here exactly the
 * way Bharat Atlas does (its own engine/, hooks/, components/, and data/bihar dataset) —
 * nothing in Bharat Atlas or the shared components needs to change to support it.
 */
export default function BiharApp({ onExit }) {
  return (
    <AppShell onBack={onExit} backLabel="Back to atlas selection" brandName="Bihar Atlas" onNavigateHome={onExit}>
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-5 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-correct-bg text-4xl dark:bg-correct/15" aria-hidden>
          🌾
        </span>
        <div>
          <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            Coming Soon
          </p>
          <h1 className="font-display text-3xl font-bold text-ink dark:text-white">Bihar Atlas</h1>
        </div>
        <p className="max-w-lg text-sm text-ink-muted sm:text-base dark:text-white/60">
          Interactive Bihar-specific preparation for BPSC including Geography, History, Economy,
          Culture, District Explorer and Current Affairs.
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {PLANNED_SECTIONS.map((section) => (
            <span
              key={section.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-line px-3 py-1.5 text-xs text-ink-muted dark:border-white/15 dark:text-white/40"
            >
              <span aria-hidden>{section.emoji}</span>
              {section.label}
              <span className="rounded-full bg-surface px-1.5 py-0.5 text-[10px] font-medium dark:bg-white/10">
                Soon
              </span>
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onExit}
          className="mt-4 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          ← Back to Atlas Home
        </button>
      </div>
    </AppShell>
  );
}
