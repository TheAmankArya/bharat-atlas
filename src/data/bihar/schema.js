// Mirrors src/data/bharat/schema.js exactly in spirit — this is Bihar's own validated
// shape, not shared with Bharat's, since two fields are genuinely different concepts:
// `districts` (not `states`) and `division` (not `region`, which was an India-macro-region
// idea with no Bihar equivalent — Bihar's real 9 divisions/pramandal fill that role instead).
export const CATEGORIES = [
  "district", // Administrative Bihar — the only category with real data in v1
  "division", // synthesized from district data (see locations/divisions.js), mirrors
              // Bharat's "state" category — its own districts[] lists every member district
  "river",
  "hill",
  "plateau",
  "waterfall",
  "dam",
  "barrage",
  "canal",
  "wetland",
  "soil",
  "protected-area", // national parks, tiger/wildlife/bird sanctuaries, Ramsar sites, dolphin sanctuary (via subcategory)
  "heritage", // UNESCO, historical/archaeological sites, universities, forts, museums, circuits (via subcategory)
  "resource", // agriculture, minerals, industries, power, airports, railways, highways, bridges (via subcategory)
];

export const DIVISIONS = [
  "Tirhut",
  "Patna",
  "Magadh",
  "Purnea",
  "Munger",
  "Darbhanga",
  "Saran",
  "Kosi",
  "Bhagalpur",
];

export const DIFFICULTIES = ["easy", "medium", "hard"];

// Real geographic extent of Bihar (topojson bbox: lat 24.29-27.52, lng 83.32-88.30),
// padded slightly the same way Bharat's schema pads India's own bbox.
const BIHAR_BOUNDS = { latMin: 24, latMax: 28, lngMin: 83, lngMax: 88.5 };

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

/** Returns an array of human-readable error strings; empty array means valid. */
export function validateLocation(loc) {
  const errors = [];
  const where = loc?.id ? `[${loc.id}]` : "[unknown id]";

  if (!loc || typeof loc !== "object") return [`${where} location is not an object`];
  if (!loc.id || typeof loc.id !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(loc.id)) {
    errors.push(`${where} id must be a kebab-case slug`);
  }
  if (!loc.name || typeof loc.name !== "string") errors.push(`${where} missing name`);
  if (!CATEGORIES.includes(loc.category)) errors.push(`${where} invalid category "${loc.category}"`);
  if (
    !loc.coordinates ||
    !isFiniteNumber(loc.coordinates.lat) ||
    !isFiniteNumber(loc.coordinates.lng) ||
    loc.coordinates.lat < BIHAR_BOUNDS.latMin ||
    loc.coordinates.lat > BIHAR_BOUNDS.latMax ||
    loc.coordinates.lng < BIHAR_BOUNDS.lngMin ||
    loc.coordinates.lng > BIHAR_BOUNDS.lngMax
  ) {
    errors.push(`${where} coordinates missing or outside Bihar's bounding box`);
  }
  if (!Array.isArray(loc.districts) || loc.districts.length === 0) {
    errors.push(`${where} districts must be a non-empty array`);
  }
  if (loc.division !== undefined && !DIVISIONS.includes(loc.division)) {
    errors.push(`${where} invalid division "${loc.division}"`);
  }
  if (!DIFFICULTIES.includes(loc.difficulty)) errors.push(`${where} invalid difficulty "${loc.difficulty}"`);
  if (!loc.description || typeof loc.description !== "string") errors.push(`${where} missing description`);
  if (!loc.importance || typeof loc.importance !== "string") errors.push(`${where} missing importance`);
  if (loc.path !== undefined) {
    if (!Array.isArray(loc.path) || loc.path.some((p) => !isFiniteNumber(p.lat) || !isFiniteNumber(p.lng))) {
      errors.push(`${where} path must be an array of {lat, lng} points`);
    }
  }
  if (loc.polygon !== undefined && !Array.isArray(loc.polygon)) errors.push(`${where} polygon must be an array`);
  if (loc.futurePYQs !== undefined && !Array.isArray(loc.futurePYQs)) errors.push(`${where} futurePYQs must be an array`);
  if (loc.relatedTopics !== undefined && !Array.isArray(loc.relatedTopics)) {
    errors.push(`${where} relatedTopics must be an array`);
  }
  if (loc.tags !== undefined && !Array.isArray(loc.tags)) errors.push(`${where} tags must be an array`);
  if (loc.source !== undefined && typeof loc.source !== "string") errors.push(`${where} source must be a string`);
  if (loc.image !== undefined && typeof loc.image !== "string") errors.push(`${where} image must be a string`);
  if (loc.icon !== undefined && typeof loc.icon !== "string") errors.push(`${where} icon must be a string`);

  return errors;
}

/** Validates a full location list, additionally checking id uniqueness. Returns an array of error strings. */
export function validateAll(locations) {
  const errors = locations.flatMap(validateLocation);

  const seen = new Set();
  for (const loc of locations) {
    if (loc?.id) {
      if (seen.has(loc.id)) errors.push(`duplicate id "${loc.id}"`);
      seen.add(loc.id);
    }
  }

  return errors;
}
