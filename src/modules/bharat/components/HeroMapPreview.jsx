import { useEffect, useMemo, useState } from "react";
import MapCanvas from "../../../components/map/MapCanvas";
import { getById } from "../../../data/bharat";
import { BHARAT_MAP_GEO, withRevealPath } from "../engine/geo";

// A handful of iconic, instantly-recognizable locations across different modes — this is
// the real MapCanvas (pan/zoom both work), just with no active question, cycling through
// reveals so the hero communicates "this is a working map" in the first five seconds.
const FEATURED_IDS = ["taj-mahal", "kangchenjunga", "aravalli-range", "ganga", "khardung-la", "wular-lake"];

export default function HeroMapPreview() {
  const featured = useMemo(() => FEATURED_IDS.map(getById).filter(Boolean), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (featured.length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % featured.length), 2800);
    return () => clearInterval(id);
  }, [featured.length]);

  const current = featured[index];

  return (
    <div className="relative h-full w-full">
      <MapCanvas
        mapGeo={BHARAT_MAP_GEO}
        disabled
        revealLocation={current ? withRevealPath(current) : null}
        highlightStateNames={current?.states ?? null}
        highlightStatus="correct"
        ariaLabel="Preview map of India"
      />
      {current && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface-raised/95 px-4 py-1.5 text-xs font-semibold text-ink shadow-md dark:bg-slate-900/95 dark:text-white">
          {current.name}
        </div>
      )}
    </div>
  );
}
