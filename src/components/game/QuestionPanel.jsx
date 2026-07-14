import { motion } from "framer-motion";

export default function QuestionPanel({ location, onSkip }) {
  if (!location) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-surface-raised p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-brand-500 dark:text-brand-400">Locate</p>
        <p className="font-display text-xl font-semibold text-ink dark:text-white">{location.name}</p>
      </div>
      <button
        type="button"
        onClick={onSkip}
        className="self-start rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
      >
        Skip
      </button>
    </motion.div>
  );
}
