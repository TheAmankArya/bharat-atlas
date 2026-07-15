#!/usr/bin/env node
// Standalone data-validation tool for Bihar Atlas — mirrors scripts/validate-data.mjs
// exactly (Bharat's own, untouched). Run via `npm run validate-data:bihar` after adding or
// editing any Bihar location file. Plain Node ESM (not Vite), so every category file must
// be listed explicitly below; add a line here whenever a new category file is created.
import { validateAll, CATEGORIES } from "../src/data/bihar/schema.js";

import { DISTRICT_LOCATIONS } from "../src/data/bihar/locations/districts.js";
import { DIVISION_LOCATIONS } from "../src/data/bihar/locations/divisions.js";
import { RIVER_LOCATIONS } from "../src/data/bihar/locations/rivers.js";
import { HILL_LOCATIONS } from "../src/data/bihar/locations/hills.js";
import { PLATEAU_LOCATIONS } from "../src/data/bihar/locations/plateaus.js";
import { WATERFALL_LOCATIONS } from "../src/data/bihar/locations/waterfalls.js";
import { DAM_LOCATIONS } from "../src/data/bihar/locations/dams.js";
import { BARRAGE_LOCATIONS } from "../src/data/bihar/locations/barrages.js";
import { CANAL_LOCATIONS } from "../src/data/bihar/locations/canals.js";
import { WETLAND_LOCATIONS } from "../src/data/bihar/locations/wetlands.js";
import { SOIL_LOCATIONS } from "../src/data/bihar/locations/soils.js";
import { PROTECTED_AREA_LOCATIONS } from "../src/data/bihar/locations/protected-areas.js";
import { HERITAGE_LOCATIONS } from "../src/data/bihar/locations/heritage.js";
import { RESOURCE_LOCATIONS } from "../src/data/bihar/locations/resources.js";

const ALL_LOCATIONS = [
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

const errors = validateAll(ALL_LOCATIONS);

const byCategory = {};
for (const loc of ALL_LOCATIONS) byCategory[loc.category] = (byCategory[loc.category] ?? 0) + 1;

console.log(`Bihar Atlas — location data validation`);
console.log(`Total locations: ${ALL_LOCATIONS.length}\n`);
console.log("By category:");
for (const category of CATEGORIES) {
  console.log(`  ${category.padEnd(18)} ${byCategory[category] ?? 0}`);
}

const emptyCategories = CATEGORIES.filter((c) => !byCategory[c]);
if (emptyCategories.length) {
  console.log(`\nCategories with zero entries (ready to receive verified data): ${emptyCategories.join(", ")}`);
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} validation error(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(`\n✓ All ${ALL_LOCATIONS.length} locations pass validation, no duplicate ids.`);
