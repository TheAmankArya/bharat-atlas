import { useSound } from "../../shared/hooks/useSound";

export default function SoundToggle() {
  const { enabled, toggle } = useSound();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? "Mute sound effects" : "Unmute sound effects"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-white/10"
    >
      {enabled ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <path d="M4 10v4h3.5L12 17.5v-11L7.5 10H4Z" strokeLinejoin="round" />
          <path d="M15.5 9a3.5 3.5 0 0 1 0 6M17.8 6.7a7 7 0 0 1 0 10.6" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <path d="M4 10v4h3.5L12 17.5v-11L7.5 10H4Z" strokeLinejoin="round" />
          <path d="M16 9.5l4 4M20 9.5l-4 4" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
