const ITEMS = [
  { emoji: "📰", label: "Bihar Current Affairs", description: "Curated, exam-relevant updates." },
  { emoji: "🏁", label: "Daily Challenge", description: "A fresh set of questions every day." },
  { emoji: "📄", label: "PYQ Explorer", description: "Browse past BPSC questions by topic." },
  { emoji: "🧠", label: "Smart Revision", description: "Spaced repetition on what you got wrong." },
];

// Intentional, polished placeholders — never a dead link pretending to work, always
// honestly badged "Coming Soon" (same visual language as the atlas-picker's own Bihar
// card and CategoryBlocks' "Soon" chips elsewhere in this module).
export default function ComingSoonSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      <h2 className="mb-4 font-display text-2xl font-semibold text-ink dark:text-white">Coming Soon</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-dashed border-line bg-surface-raised px-4 py-6 text-center opacity-90 dark:border-white/15 dark:bg-white/5"
          >
            <span className="text-3xl" aria-hidden>
              {item.emoji}
            </span>
            <span className="font-display text-sm font-semibold text-ink dark:text-white">{item.label}</span>
            <span className="text-xs text-ink-muted dark:text-white/50">{item.description}</span>
            <span className="mt-1 rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-muted dark:bg-white/10 dark:text-white/40">
              Soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
