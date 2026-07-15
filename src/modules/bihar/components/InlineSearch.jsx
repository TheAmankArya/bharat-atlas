import { useMemo, useState } from "react";
import { search as searchLocations } from "../../../data/bihar";

const CATEGORY_LABELS = {
  district: "District",
  division: "Division",
  river: "River",
  hill: "Hill",
  plateau: "Plateau",
  waterfall: "Waterfall",
  dam: "Dam",
  barrage: "Barrage",
  canal: "Canal",
  wetland: "Wetland",
  soil: "Soil region",
  "protected-area": "Protected area",
  heritage: "Heritage site",
  resource: "Resource",
};

export default function InlineSearch({ onSelectLocation }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => (query.trim() ? searchLocations(query, { limit: 8 }) : []), [query]);

  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-8">
      <h2 className="mb-1 text-center font-display text-2xl font-semibold text-ink dark:text-white">
        Search any place instantly
      </h2>
      <p className="mb-5 text-center text-sm text-ink-muted dark:text-white/50">
        Try &ldquo;Patna&rdquo;, &ldquo;Nalanda&rdquo;, &ldquo;Gaya&rdquo;, &ldquo;Tirhut&rdquo;…
      </p>
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted dark:text-white/40"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a district, division, river, heritage site…"
          className="w-full rounded-2xl border border-line bg-surface-raised py-4 pl-12 pr-4 text-base text-ink shadow-sm outline-none transition-colors focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
        />
        {results.length > 0 && (
          <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-xl dark:border-white/10 dark:bg-slate-900">
            {results.map((loc) => (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectLocation(loc);
                    setQuery("");
                  }}
                  className="flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left hover:bg-surface dark:hover:bg-white/5"
                >
                  <span className="font-medium text-ink dark:text-white">{loc.name}</span>
                  <span className="text-xs text-ink-muted dark:text-white/50">
                    {CATEGORY_LABELS[loc.category] ?? loc.category}
                    {loc.districts?.[0] && ` · ${loc.districts[0]}`}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
