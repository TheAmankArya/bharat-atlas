import { DAILY_CHALLENGE_LENGTH } from "../engine/dailyChallenge";

export default function DailyChallengeCard({ onStart, completedToday }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Today&rsquo;s Mapping Challenge</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          {DAILY_CHALLENGE_LENGTH} Questions &middot; Medium Difficulty &middot; ~5 min
        </h2>
        {completedToday ? (
          <p className="mt-4 max-w-xl text-sm text-white/90">
            You scored {completedToday.correctCount}/{completedToday.totalCount} today. Come back tomorrow for a
            fresh set, or play again for practice.
          </p>
        ) : (
          <p className="mt-4 max-w-xl text-sm text-white/80">
            A fixed set of 10 locations — the same for everyone today. See how you do.
          </p>
        )}
        <button
          type="button"
          onClick={onStart}
          className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-transform hover:scale-[1.02]"
        >
          {completedToday ? "Play Again" : "Start Challenge"}
        </button>
      </div>
    </section>
  );
}
