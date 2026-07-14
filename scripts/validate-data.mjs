#!/usr/bin/env node
// Standalone data-validation tool — run via `npm run validate-data` after adding or
// editing any location file. Plain Node ESM (not Vite), so every category file must be
// listed explicitly below; add a line here whenever a new category file is created.
import { validateAll, CATEGORIES } from "../src/data/bharat/schema.js";

import { STATE_AND_CAPITAL_LOCATIONS } from "../src/data/bharat/locations/states.js";
import { MOUNTAIN_LOCATIONS } from "../src/data/bharat/locations/mountains.js";
import { HILL_LOCATIONS } from "../src/data/bharat/locations/hills.js";
import { PASS_LOCATIONS } from "../src/data/bharat/locations/passes.js";
import { PEAK_LOCATIONS } from "../src/data/bharat/locations/peaks.js";
import { PLATEAU_LOCATIONS } from "../src/data/bharat/locations/plateaus.js";
import { RIVER_LOCATIONS } from "../src/data/bharat/locations/rivers.js";
import { RIVER_TRIBUTARY_LOCATIONS } from "../src/data/bharat/locations/rivers-tributaries.js";
import { LAKE_LOCATIONS } from "../src/data/bharat/locations/lakes.js";
import { WETLAND_LOCATIONS } from "../src/data/bharat/locations/wetlands.js";
import { FOREST_LOCATIONS } from "../src/data/bharat/locations/forests.js";
import { MINERAL_LOCATIONS } from "../src/data/bharat/locations/minerals.js";
import { SOIL_LOCATIONS } from "../src/data/bharat/locations/soils.js";
import { CROP_LOCATIONS } from "../src/data/bharat/locations/crops.js";
import { ISLAND_LOCATIONS } from "../src/data/bharat/locations/islands.js";
import { COASTAL_FEATURE_LOCATIONS } from "../src/data/bharat/locations/coastal-features.js";
import { UNESCO_LOCATIONS } from "../src/data/bharat/locations/unesco.js";
import { DAM_LOCATIONS } from "../src/data/bharat/locations/dams.js";
import { INDUSTRY_LOCATIONS } from "../src/data/bharat/locations/industries.js";

const ALL_LOCATIONS = [
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

const errors = validateAll(ALL_LOCATIONS);

const byCategory = {};
for (const loc of ALL_LOCATIONS) byCategory[loc.category] = (byCategory[loc.category] ?? 0) + 1;

console.log(`Bharat Atlas — location data validation`);
console.log(`Total locations: ${ALL_LOCATIONS.length}\n`);
console.log("By category:");
for (const category of CATEGORIES) {
  console.log(`  ${category.padEnd(18)} ${byCategory[category] ?? 0}`);
}

const emptyCategories = CATEGORIES.filter((c) => !byCategory[c]);
if (emptyCategories.length) {
  console.log(`\nCategories with zero entries: ${emptyCategories.join(", ")}`);
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} validation error(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

console.log(`\n✓ All ${ALL_LOCATIONS.length} locations pass validation, no duplicate ids.`);
