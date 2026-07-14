export const CATEGORIES = [
  "mountain",
  "hill",
  "plateau",
  "pass",
  "peak",
  "river",
  "lake",
  "wetland",
  "forest",
  "mineral",
  "soil",
  "crop",
  "industry",
  "unesco",
  "island",
  "coastal-feature",
  "dam",
  "state",
  "capital",
];

export const REGIONS = ["north", "south", "east", "west", "northeast", "central"];

export const DIFFICULTIES = ["easy", "medium", "hard"];

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
    loc.coordinates.lat < 6 ||
    loc.coordinates.lat > 38 ||
    loc.coordinates.lng < 68 ||
    loc.coordinates.lng > 98
  ) {
    errors.push(`${where} coordinates missing or outside India's bounding box`);
  }
  if (!Array.isArray(loc.states) || loc.states.length === 0) {
    errors.push(`${where} states must be a non-empty array`);
  }
  if (!REGIONS.includes(loc.region)) errors.push(`${where} invalid region "${loc.region}"`);
  if (!DIFFICULTIES.includes(loc.difficulty)) errors.push(`${where} invalid difficulty "${loc.difficulty}"`);
  if (!loc.description || typeof loc.description !== "string") errors.push(`${where} missing description`);
  if (!loc.importance || typeof loc.importance !== "string") errors.push(`${where} missing importance`);
  if (loc.path !== undefined) {
    if (!Array.isArray(loc.path) || loc.path.some((p) => !isFiniteNumber(p.lat) || !isFiniteNumber(p.lng))) {
      errors.push(`${where} path must be an array of {lat, lng} points`);
    }
  }
  if (loc.pyq !== undefined && !Array.isArray(loc.pyq)) errors.push(`${where} pyq must be an array`);
  if (loc.relatedIds !== undefined && !Array.isArray(loc.relatedIds)) errors.push(`${where} relatedIds must be an array`);
  if (loc.tags !== undefined && !Array.isArray(loc.tags)) errors.push(`${where} tags must be an array`);

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
