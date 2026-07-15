import { useMemo } from "react";
import AppShell from "../../../../components/layout/AppShell";
import MapCanvas from "../../../../components/map/MapCanvas";
import { DISTRICT_LOCATIONS } from "../../../../data/bihar/locations/districts";
import { BIHAR_MAP_GEO, getNeighbourDistrictNames } from "../../engine/geo";
import PlaceholderSection from "./PlaceholderSection";

export default function DistrictDetailPage({ district, onSelectDistrict, onPractice, onBack, onNavigateHome }) {
  // Real, derived fact (shared topojson boundary arcs) — not invented content.
  const neighbours = useMemo(() => {
    const names = getNeighbourDistrictNames(district.name);
    return names.map((name) => DISTRICT_LOCATIONS.find((d) => d.name === name)).filter(Boolean);
  }, [district.name]);

  return (
    <AppShell
      onBack={onBack}
      backLabel="Back to District Explorer"
      brandName="Bihar Atlas"
      onNavigateHome={onNavigateHome}
      subtitle={district.name}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col gap-5 overflow-y-auto p-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            {district.division} Division
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white">{district.name}</h1>
        </div>

        <div className="h-56 overflow-hidden rounded-2xl border border-line shadow-sm sm:h-72 dark:border-white/10">
          <MapCanvas
            mapGeo={BIHAR_MAP_GEO}
            disabled
            highlightStateNames={[district.name]}
            highlightStatus="correct"
            focusCenter={[district.coordinates.lng, district.coordinates.lat]}
            focusZoom={4}
            ariaLabel={`Map of ${district.name} district`}
          />
        </div>

        <PlaceholderSection title="Overview" />

        <div className="rounded-2xl border border-line bg-surface-raised p-5 dark:border-white/10 dark:bg-white/5">
          <p className="font-display text-sm font-semibold text-ink dark:text-white">Neighbour Districts</p>
          {neighbours.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {neighbours.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => onSelectDistrict(n)}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-brand-300"
                >
                  {n.name}
                </button>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm italic text-ink-muted dark:text-white/40">No neighbours found.</p>
          )}
        </div>

        <PlaceholderSection title="Major Rivers" />
        <PlaceholderSection title="Protected Areas" />
        <PlaceholderSection title="Agriculture" />
        <PlaceholderSection title="Industries" />
        <PlaceholderSection title="Tourist Places" />

        <div className="rounded-2xl border border-line bg-surface-raised p-5 dark:border-white/10 dark:bg-white/5">
          <p className="mb-3 font-display text-sm font-semibold text-ink dark:text-white">Practice</p>
          <button
            type="button"
            onClick={onPractice}
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Practice District Mode
          </button>
        </div>

        <PlaceholderSection title="Previous Year Questions" />
      </div>
    </AppShell>
  );
}
