export default function DistrictCard({ district, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(district)}
      className="flex flex-col items-start gap-1 rounded-lg border border-line bg-surface-raised p-4 text-left shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-white/5"
    >
      <span className="font-display text-sm font-semibold text-ink dark:text-white">{district.name}</span>
      <span className="text-xs text-ink-muted dark:text-white/50">{district.division} Division</span>
    </button>
  );
}
