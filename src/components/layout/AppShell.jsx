import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";
import MusicToggle from "./MusicToggle";
import ScoreBar from "../game/ScoreBar";

function BrandLabel({ brandName, subtitle }) {
  return (
    <>
      <span className="hidden sm:inline">{brandName}</span>
      <span className="sm:hidden">{subtitle ?? brandName}</span>
      {subtitle && <span className="hidden text-ink-muted dark:text-white/50 sm:inline"> · {subtitle}</span>}
    </>
  );
}

/**
 * Shared chrome for every atlas module: back button, brand + subtitle, score bar, module
 * actions (search/stats/filter), sound/theme toggles. `brandName` and `onNavigateHome` are
 * supplied by the module (e.g. "Bharat Atlas") so this component has no hardcoded identity.
 */
export default function AppShell({
  onBack,
  backLabel = "Back to modes",
  brandName = "Atlas",
  onNavigateHome,
  subtitle,
  stats,
  actions,
  children,
}) {
  return (
    <div className="flex h-screen flex-col bg-surface dark:bg-[#0b0d12]">
      <header className="flex shrink-0 items-center justify-between gap-2 border-b border-line px-3 py-3 dark:border-white/10 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label={backLabel}
              title={backLabel}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-raised dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <span className="min-w-0 flex-1 font-display text-base font-semibold text-ink dark:text-white">
            {onNavigateHome ? (
              <button
                type="button"
                onClick={onNavigateHome}
                className="block max-w-full truncate text-left hover:underline"
              >
                <BrandLabel brandName={brandName} subtitle={subtitle} />
              </button>
            ) : (
              <span className="block max-w-full truncate">
                <BrandLabel brandName={brandName} subtitle={subtitle} />
              </span>
            )}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {stats && (
            <div className="hidden lg:flex">
              <ScoreBar stats={stats} />
            </div>
          )}
          {actions}
          <MusicToggle />
          <SoundToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
