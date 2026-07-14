import { computeAccuracy } from "../../shared/engine/scoring";

function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center px-2">
      <span className="font-display text-sm font-semibold text-ink dark:text-white">{value}</span>
      <span className="text-[11px] uppercase tracking-wide text-ink-muted dark:text-white/50">{label}</span>
    </div>
  );
}

export default function ScoreBar({ stats }) {
  if (!stats) return null;
  const accuracy = computeAccuracy(stats);

  return (
    <div className="flex items-center divide-x divide-line rounded-full border border-line bg-surface-raised px-2 py-1 dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
      <Stat label="Correct" value={stats.correct} />
      <Stat label="Wrong" value={stats.wrong} />
      <Stat label="Accuracy" value={`${accuracy}%`} />
      <Stat label="Streak" value={stats.currentStreak} />
      <Stat label="Best" value={stats.bestStreak} />
    </div>
  );
}
