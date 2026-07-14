import { validateAll } from "./schema";
import { STATE_AND_CAPITAL_LOCATIONS } from "./locations/states";
import { MOUNTAIN_LOCATIONS } from "./locations/mountains";
import { HILL_LOCATIONS } from "./locations/hills";
import { PASS_LOCATIONS } from "./locations/passes";
import { PEAK_LOCATIONS } from "./locations/peaks";
import { PLATEAU_LOCATIONS } from "./locations/plateaus";
import { RIVER_LOCATIONS } from "./locations/rivers";
import { RIVER_TRIBUTARY_LOCATIONS } from "./locations/rivers-tributaries";
import { LAKE_LOCATIONS } from "./locations/lakes";
import { WETLAND_LOCATIONS } from "./locations/wetlands";
import { FOREST_LOCATIONS } from "./locations/forests";
import { MINERAL_LOCATIONS } from "./locations/minerals";
import { SOIL_LOCATIONS } from "./locations/soils";
import { CROP_LOCATIONS } from "./locations/crops";
import { ISLAND_LOCATIONS } from "./locations/islands";
import { COASTAL_FEATURE_LOCATIONS } from "./locations/coastal-features";
import { UNESCO_LOCATIONS } from "./locations/unesco";
import { DAM_LOCATIONS } from "./locations/dams";
import { INDUSTRY_LOCATIONS } from "./locations/industries";

// Add new category files here as content grows.
// Each file exports one flat array of location objects matching src/data/schema.js.
export const ALL_LOCATIONS = [
  ...STATE_AND_CAPITAL_LOCATIONS,
  ...MOUNTAIN_LOCATIONS,
  ...HILL_LOCATIONS,
  ...PASS_LOCATIONS,
  ...PEAK_LOCATIONS,
  ...PLATEAU_LOCATIONS,
  ...RIVER_LOCATIONS,
  ...RIVER_TRIBUTARY_LOCATIONS,
  ...LAKE_LOCATIONS,
  ...WETLAND_LOCATIONS,
  ...FOREST_LOCATIONS,
  ...MINERAL_LOCATIONS,
  ...SOIL_LOCATIONS,
  ...CROP_LOCATIONS,
  ...ISLAND_LOCATIONS,
  ...COASTAL_FEATURE_LOCATIONS,
  ...UNESCO_LOCATIONS,
  ...DAM_LOCATIONS,
  ...INDUSTRY_LOCATIONS,
];

if (import.meta.env.DEV) {
  const errors = validateAll(ALL_LOCATIONS);
  if (errors.length) {
    // eslint-disable-next-line no-console
    console.error(`Location data validation failed (${errors.length} issue(s)):\n${errors.join("\n")}`);
  }
}

const BY_ID = new Map(ALL_LOCATIONS.map((loc) => [loc.id, loc]));

export function getById(id) {
  return BY_ID.get(id);
}

export function getByIds(ids) {
  return ids.map(getById).filter(Boolean);
}

export function getByCategory(category) {
  return ALL_LOCATIONS.filter((loc) => loc.category === category);
}

export function getByCategories(categories) {
  const set = new Set(categories);
  return ALL_LOCATIONS.filter((loc) => set.has(loc.category));
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** Simple substring search across name/tags/states/subcategory — fine at hundreds of entries; revisit with Fuse.js once the dataset reaches the thousands. */
export function search(query, { limit = 20 } = {}) {
  const q = normalize(query.trim());
  if (!q) return [];

  return ALL_LOCATIONS.filter((loc) => {
    const haystack = normalize(
      [loc.name, loc.subcategory, ...(loc.states ?? []), ...(loc.tags ?? [])].filter(Boolean).join(" ")
    );
    return haystack.includes(q);
  }).slice(0, limit);
}
