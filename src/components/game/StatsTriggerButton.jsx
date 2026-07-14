export default function StatsTriggerButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="View your progress"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-white/10"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M5 19V10M12 19V5M19 19v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
