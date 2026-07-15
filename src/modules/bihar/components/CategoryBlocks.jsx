import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOPIC_CATEGORIES, isTopicLive } from "../engine/topics";
import { getMode } from "../engine/modes";
import { getQuestionPool } from "../engine/questionEngine";

// Mirrors src/modules/bharat/components/CategoryBlocks.jsx exactly.
function TopicChip({ topic, onSelect }) {
  if (!isTopicLive(topic)) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-line px-3 py-1.5 text-xs text-ink-muted dark:border-white/15 dark:text-white/40">
        {topic.label}
        <span className="rounded-full bg-surface px-1.5 py-0.5 text-[10px] font-medium dark:bg-white/10">Soon</span>
      </span>
    );
  }

  const mode = getMode(topic.modeId);
  const count = getQuestionPool(mode, { subcategory: topic.subcategory, tag: topic.tag }).length;

  return (
    <button
      type="button"
      onClick={() => onSelect(topic)}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-raised px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-brand-300"
    >
      {topic.label}
      <span className="text-ink-muted dark:text-white/40">{count}</span>
    </button>
  );
}

function CategoryBlock({ category, isOpen, onToggle, onSelectTopic }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 p-5 text-left"
        style={{ backgroundColor: `var(--color-cat-${category.color}-bg)` }}
      >
        <div className="flex items-center gap-3.5">
          <span className="text-2xl" aria-hidden>
            {category.emoji}
          </span>
          <div>
            <p className="font-display text-base font-semibold" style={{ color: `var(--color-cat-${category.color})` }}>
              {category.label}
            </p>
            <p className="mt-0.5 text-xs text-ink-muted dark:text-white/50">{category.blurb}</p>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 shrink-0 text-ink-muted dark:text-white/50"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="flex flex-wrap gap-2 p-5 pt-0">
              {category.topics.map((topic) => (
                <TopicChip key={topic.label} topic={topic} onSelect={onSelectTopic} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CategoryBlocks({ onSelectTopic, sectionId }) {
  const [openId, setOpenId] = useState(TOPIC_CATEGORIES[0].id);

  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl scroll-mt-20 space-y-3 px-6 py-8">
      <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Browse by Topic</h2>
      <div className="space-y-3">
        {TOPIC_CATEGORIES.map((category) => (
          <CategoryBlock
            key={category.id}
            category={category}
            isOpen={openId === category.id}
            onToggle={() => setOpenId((prev) => (prev === category.id ? null : category.id))}
            onSelectTopic={onSelectTopic}
          />
        ))}
      </div>
    </section>
  );
}
