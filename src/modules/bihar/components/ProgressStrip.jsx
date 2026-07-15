import { computeAccuracy } from "../../../shared/engine/scoring";

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-raised p-5 text-center dark:border-white/10 dark:bg-white/5">
      <p className="font-display text-2xl font-bold text-ink dark:text-white">{value}</p>
      <p className="mt-1 text-xs text-ink-muted dark:text-white/50">{label}</p>
    </div>
  );
}

export default function ProgressStrip({ stats }) {
  const accuracy = computeAccuracy(stats);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      <h2 className="mb-4 font-display text-2xl font-semibold text-ink dark:text-white">Your Progress</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Questions Attempted" value={stats.attempted} />
        <StatCard label="Accuracy" value={`${accuracy}%`} />
        <StatCard label="Current Streak" value={stats.currentStreak} />
        <StatCard label="Best Streak" value={stats.bestStreak} />
      </div>
    </section>
  );
}
