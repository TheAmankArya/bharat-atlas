import { ALL_LOCATIONS } from "../../../data/bharat";
import HeroMapPreview from "./HeroMapPreview";

export default function HeroSection({ onStartPracticing, onBrowseTopics }) {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
      <div className="text-center lg:text-left">
        <p className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 lg:mx-0 dark:bg-brand-500/15 dark:text-brand-300">
          Free forever · No login · No signup
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
          Bharat Atlas
        </h1>
        <p className="mt-4 font-display text-lg font-medium text-ink sm:text-xl dark:text-white/90">
          Master Indian Geography through Interactive Map Practice.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-muted sm:text-base lg:mx-0 dark:text-white/60">
          Practice mountains, rivers, passes, lakes, forests, minerals, national parks, UNESCO
          sites and much more — {ALL_LOCATIONS.length}+ real locations, built for UPSC, BPSC and
          State PSC aspirants.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <button
            type="button"
            onClick={onStartPracticing}
            className="w-full rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 sm:w-auto"
          >
            Start Practicing
          </button>
          <button
            type="button"
            onClick={onBrowseTopics}
            className="w-full rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-raised sm:w-auto dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            Browse All Topics
          </button>
        </div>
      </div>

      <div className="h-72 overflow-hidden rounded-3xl border border-line shadow-sm sm:h-96 lg:h-[28rem] dark:border-white/10">
        <HeroMapPreview />
      </div>
    </section>
  );
}
