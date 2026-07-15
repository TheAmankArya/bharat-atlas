import { useMemo, useState } from "react";
import AppShell from "../../../../components/layout/AppShell";
import MapCanvas from "../../../../components/map/MapCanvas";
import { DISTRICT_LOCATIONS } from "../../../../data/bihar/locations/districts";
import { BIHAR_MAP_GEO, findDistrictAtPoint } from "../../engine/geo";
import DistrictCard from "./DistrictCard";

const SORTED_DISTRICTS = [...DISTRICT_LOCATIONS].sort((a, b) => a.name.localeCompare(b.name));

export default function DistrictExplorerPage({ onSelectDistrict, onBack, onNavigateHome }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SORTED_DISTRICTS;
    return SORTED_DISTRICTS.filter(
      (d) => d.name.toLowerCase().includes(q) || d.division.toLowerCase().includes(q)
    );
  }, [query]);

  const handleMapClick = ({ lat, lng }) => {
    const name = findDistrictAtPoint({ lat, lng });
    const district = name && DISTRICT_LOCATIONS.find((d) => d.name === name);
    if (district) onSelectDistrict(district);
  };

  return (
    <AppShell
      onBack={onBack}
      backLabel="Back to modes"
      brandName="Bihar Atlas"
      onNavigateHome={onNavigateHome}
      subtitle="District Explorer"
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-6 overflow-y-auto p-6 lg:flex-row lg:overflow-hidden">
        <div className="h-72 shrink-0 overflow-hidden rounded-2xl border border-line shadow-sm lg:h-auto lg:w-1/2 dark:border-white/10">
          <MapCanvas
            mapGeo={BIHAR_MAP_GEO}
            onMapClick={handleMapClick}
            ariaLabel="Interactive map of Bihar — click a district to open its page"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 lg:overflow-y-auto">
          <div className="relative shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted dark:text-white/40"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a district or division…"
              className="w-full rounded-lg border border-line bg-surface-raised py-2.5 pl-11 pr-4 text-sm text-ink shadow-sm outline-none transition-colors focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <p className="shrink-0 text-xs text-ink-muted dark:text-white/50">
            {filtered.length} district{filtered.length === 1 ? "" : "s"}
          </p>

          <div className="grid grid-cols-2 gap-3 pb-6 sm:grid-cols-3">
            {filtered.map((district) => (
              <DistrictCard key={district.id} district={district} onSelect={onSelectDistrict} />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
