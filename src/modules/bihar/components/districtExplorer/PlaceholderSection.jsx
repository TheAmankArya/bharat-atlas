// One reusable "this section is coming soon" card, used across every District Detail Page
// section (Overview, Major Rivers, Protected Areas, ...) so none of them ever show
// invented facts — just an honest, polished placeholder until verified content lands.
export default function PlaceholderSection({ title, children }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-surface-raised p-5 dark:border-white/15 dark:bg-white/5">
      <p className="font-display text-sm font-semibold text-ink dark:text-white">{title}</p>
      {children ? (
        <div className="mt-2 text-sm text-ink-muted dark:text-white/60">{children}</div>
      ) : (
        <p className="mt-2 text-sm italic text-ink-muted dark:text-white/40">Content coming soon.</p>
      )}
    </div>
  );
}
