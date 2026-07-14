import { motion } from "framer-motion";
import ThemeToggle from "../components/layout/ThemeToggle";
import SoundToggle from "../components/layout/SoundToggle";
import MusicToggle from "../components/layout/MusicToggle";

export default function HomePage({ onSelectBharat, onSelectBihar }) {
  return (
    <div className="relative flex h-screen flex-col overflow-y-auto bg-surface dark:bg-[#0b0d12]">
      {/* Soft ambient color, not a hard gradient panel — keeps the page from reading as a
          blank, generic dashboard while staying well inside "educational product," not
          "futuristic app." */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-400/10" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-correct/10 blur-3xl dark:bg-correct/10" />
      </div>

      <header className="relative flex shrink-0 items-center justify-between border-b border-line px-4 py-3 dark:border-white/10 sm:px-6">
        <span className="flex items-center gap-2 font-display text-base font-semibold text-ink dark:text-white">
          <span aria-hidden>🧭</span> Atlas Platform
        </span>
        <div className="flex items-center gap-2">
          <MusicToggle />
          <SoundToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-10 px-6 py-12">
        <div className="text-center">
          <p className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            Built for UPSC · BPSC · State PSC · SSC aspirants
          </p>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">Choose Your Atlas</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-muted sm:text-base dark:text-white/60">
            Somewhere, a map question is waiting to decide your rank. Practice it here first —
            free, forever, no login required.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.button
            type="button"
            onClick={onSelectBharat}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-3xl border border-line bg-surface-raised p-7 text-left shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-brand-500 transition-opacity group-hover:opacity-100 dark:bg-brand-400"
              aria-hidden
            />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-3xl dark:bg-brand-500/15">
              🇮🇳
            </span>
            <span className="font-display text-xl font-semibold text-ink dark:text-white">Bharat Atlas</span>
            <span className="text-sm text-ink-muted dark:text-white/60">
              Fully functional — practice mountains, rivers, states, capitals, forests, minerals, UNESCO
              sites and much more across 19 map modes.
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-correct-bg px-3 py-1 text-xs font-semibold text-correct dark:bg-correct/15">
              ● Live
            </span>
          </motion.button>

          <motion.button
            type="button"
            onClick={onSelectBihar}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-3xl border border-dashed border-line bg-surface-raised p-7 text-left opacity-90 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-white/5"
          >
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-correct transition-opacity group-hover:opacity-100"
              aria-hidden
            />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-correct-bg text-3xl dark:bg-correct/15">
              🌾
            </span>
            <span className="font-display text-xl font-semibold text-ink dark:text-white">Bihar Atlas</span>
            <span className="text-sm text-ink-muted dark:text-white/60">
              Interactive Bihar-specific preparation for BPSC including Geography, History, Economy,
              Culture, District Explorer and Current Affairs.
            </span>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink-muted dark:bg-white/10 dark:text-white/50">
              Coming Soon
            </span>
          </motion.button>
        </div>

        <footer className="mt-4 flex flex-col items-center gap-1 text-center">
          <p className="text-xs italic text-ink-muted dark:text-white/40">
            "The chair I dream of is reserved for the version of me that refuses to give up."
          </p>
          <p className="text-[11px] font-medium text-ink-muted dark:text-white/30">— Amank Arya</p>
        </footer>
      </main>
    </div>
  );
}
