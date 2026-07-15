import { validateAll } from "./schema";
import { DISTRICT_LOCATIONS } from "./locations/districts";
import { DIVISION_LOCATIONS } from "./locations/divisions";
import { RIVER_LOCATIONS } from "./locations/rivers";
import { HILL_LOCATIONS } from "./locations/hills";
import { PLATEAU_LOCATIONS } from "./locations/plateaus";
import { WATERFALL_LOCATIONS } from "./locations/waterfalls";
import { DAM_LOCATIONS } from "./locations/dams";
import { BARRAGE_LOCATIONS } from "./locations/barrages";
import { CANAL_LOCATIONS } from "./locations/canals";
import { WETLAND_LOCATIONS } from "./locations/wetlands";
import { SOIL_LOCATIONS } from "./locations/soils";
import { PROTECTED_AREA_LOCATIONS } from "./locations/protected-areas";
import { HERITAGE_LOCATIONS } from "./locations/heritage";
import { RESOURCE_LOCATIONS } from "./locations/resources";

// Add new category files here as content grows — mirrors src/data/bharat/index.js exactly.
export const ALL_LOCATIONS = [
  ...DISTRICT_LOCATIONS,
  ...DIVISION_LOCATIONS,
  ...RIVER_LOCATIONS,
  ...HILL_LOCATIONS,
  ...PLATEAU_LOCATIONS,
  ...WATERFALL_LOCATIONS,
  ...DAM_LOCATIONS,
  ...BARRAGE_LOCATIONS,
  ...CANAL_LOCATIONS,
  ...WETLAND_LOCATIONS,
  ...SOIL_LOCATIONS,
  ...PROTECTED_AREA_LOCATIONS,
  ...HERITAGE_LOCATIONS,
  ...RESOURCE_LOCATIONS,
];

if (import.meta.env.DEV) {
  const errors = validateAll(ALL_LOCATIONS);
  if (errors.length) {
    // eslint-disable-next-line no-console
    console.error(`Bihar location data validation failed (${errors.length} issue(s)):\n${errors.join("\n")}`);
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

/** Simple substring search across name/tags/districts/subcategory — same approach as
 * Bharat's search, fine at hundreds of entries. */
export function search(query, { limit = 20 } = {}) {
  const q = normalize(query.trim());
  if (!q) return [];

  return ALL_LOCATIONS.filter((loc) => {
    const haystack = normalize(
      [loc.name, loc.subcategory, loc.division, ...(loc.districts ?? []), ...(loc.tags ?? [])]
        .filter(Boolean)
        .join(" ")
    );
    return haystack.includes(q);
  }).slice(0, limit);
}
