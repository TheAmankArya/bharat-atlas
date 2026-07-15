import { motion } from "framer-motion";

/**
 * `getByIds` (locationId[]) => Location[] is supplied by the caller's own data module —
 * this card has no knowledge of which atlas's dataset `location` came from.
 *
 * `onPrevious` (optional) shows a "Previous question" button that steps back exactly one
 * question for read-only review — reviewing never re-runs scoring, it just re-displays a
 * past result. `isReviewing` flips the primary button to "Back to current question" and
 * hides `onPrevious` (only one step back is supported, so there's nothing further to see).
 */
export default function FeedbackCard({ location, isCorrect, onNext, getByIds = () => [], onPrevious, isReviewing = false }) {
  if (!location) return null;
  // Bharat's locations carry `states`/`relatedIds`/`pyq`; Bihar's carry `districts`/
  // `relatedTopics`/`futurePYQs` instead (different real-world concept, same shape) — a
  // location only ever has one side of each pair populated, so this fallback needs no
  // per-module prop and never changes Bharat's own behavior.
  const regionTags = location.states ?? location.districts ?? [];
  const relatedIds = location.relatedIds ?? location.relatedTopics ?? [];
  const pastQuestions = location.pyq ?? location.futurePYQs ?? [];
  const related = getByIds(relatedIds);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-raised p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
    >
      {isReviewing && (
        <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted dark:bg-white/10 dark:text-white/50">
          ← Reviewing previous question
        </p>
      )}

      <div className="flex items-center gap-2">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${
            isCorrect ? "bg-correct" : "bg-wrong"
          }`}
          aria-hidden
        >
          {isCorrect ? "✓" : "✕"}
        </span>
        <div>
          <p className={`text-sm font-semibold ${isCorrect ? "text-correct" : "text-wrong"}`}>
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="font-display text-xl font-semibold text-ink dark:text-white">{location.name}</p>
        </div>
      </div>

      <p className="text-sm text-ink-muted dark:text-white/70">{location.description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-ink-muted dark:text-white/50">
        {regionTags.map((s) => (
          <span key={s} className="rounded-full bg-surface px-2.5 py-1 dark:bg-white/10">
            {s}
          </span>
        ))}
      </div>

      <div className="rounded-xl bg-brand-50 p-3 text-sm text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
        <span className="font-medium">Why it matters: </span>
        {location.importance}
      </div>

      {location.mnemonic && (
        <div className="text-sm text-ink-muted dark:text-white/60">
          <span className="font-medium text-ink dark:text-white">Mnemonic: </span>
          {location.mnemonic}
        </div>
      )}

      {pastQuestions.length > 0 && (
        <div className="text-sm text-ink-muted dark:text-white/60">
          <span className="font-medium text-ink dark:text-white">Previously asked: </span>
          {pastQuestions.map((p) => `${p.exam} ${p.year}`).join(", ")}
        </div>
      )}

      {related.length > 0 && (
        <div className="flex flex-wrap gap-1 text-xs text-ink-muted dark:text-white/50">
          <span className="font-medium text-ink dark:text-white">Related: </span>
          {related.map((r) => r.name).join(", ")}
        </div>
      )}

      <div className="mt-1 flex flex-wrap items-center gap-2">
        {!isReviewing && onPrevious && (
          <button
            type="button"
            onClick={onPrevious}
            className="self-start rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            ← Previous question
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="self-start rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          {isReviewing ? "Back to current question →" : "Next question"}
        </button>
      </div>
    </motion.div>
  );
}
