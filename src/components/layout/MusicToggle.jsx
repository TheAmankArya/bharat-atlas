import { useBackgroundMusic } from "../../shared/hooks/useBackgroundMusic";

export default function MusicToggle() {
  const { enabled, toggle } = useBackgroundMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? "Mute background music" : "Play background music"}
      title={enabled ? "Mute background music — Wonders of the Earth" : "Play background music — Wonders of the Earth"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-white/10"
    >
      {enabled ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <path d="M9 18V6l10-2v12" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <path d="M9 18V6l10-2v12" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          <circle cx="7" cy="18" r="2" opacity="0.35" />
          <circle cx="17" cy="16" r="2" opacity="0.35" />
          <path d="M4 4l16 16" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
