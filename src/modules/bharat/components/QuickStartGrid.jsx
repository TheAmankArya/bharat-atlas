import { motion } from "framer-motion";

const ITEMS = [
  { key: "topic", emoji: "📚", label: "Practice by Topic", description: "Pick exactly what to study." },
  { key: "mixed", emoji: "🔀", label: "Mixed Practice", description: "Random questions, every category." },
  { key: "daily", emoji: "🏁", label: "Today's Challenge", description: "10 questions, new every day." },
  { key: "random", emoji: "🎲", label: "Random Question", description: "One quick question, right now." },
];

export default function QuickStartGrid({ onSelect }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <motion.button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            aria-label={item.label}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-line bg-surface-raised px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <span className="text-3xl" aria-hidden>
              {item.emoji}
            </span>
            <span className="font-display text-sm font-semibold text-ink dark:text-white">{item.label}</span>
            <span className="text-xs text-ink-muted dark:text-white/50">{item.description}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
