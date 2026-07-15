import { getByCategories } from "../../../data/bihar";
import { haversineDistanceKm, isPointInDistrict } from "./geo";

// Mirrors src/modules/bharat/engine/questionEngine.js exactly, `districts` in place of
// `states` — every category accepts a click anywhere inside any listed district, with a
// distance-to-coordinate fallback for the rare landmark that might sit right at a
// district boundary (the same hybrid rule that fixed Bharat's Kangchenjunga border case).
const DISTANCE_THRESHOLD_KM = { easy: 60, medium: 35, hard: 18 };

// `subcategory`/`tag` are fixed narrowing filters set at launch time — distinct from
// `difficulty`/`division`, which the user can change mid-session via FilterPanel.
export function getQuestionPool(mode, { difficulty, division, subcategory, tag } = {}) {
  let pool = getByCategories(mode.categories);
  if (difficulty) pool = pool.filter((loc) => loc.difficulty === difficulty);
  if (division) pool = pool.filter((loc) => loc.division === division);
  if (subcategory) {
    const allowed = Array.isArray(subcategory) ? subcategory : [subcategory];
    pool = pool.filter((loc) => allowed.includes(loc.subcategory));
  }
  if (tag) pool = pool.filter((loc) => loc.tags?.includes(tag));
  return pool;
}

export function checkAnswer(location, clickPoint) {
  if (location.districts.some((name) => isPointInDistrict(clickPoint, name))) return true;

  const thresholdKm = DISTANCE_THRESHOLD_KM[location.difficulty] ?? 40;
  return haversineDistanceKm(location.coordinates, clickPoint) <= thresholdKm;
}

// Locations never seen (or seen but never right) are weighted higher — mirrors Bharat's
// lightweight spaced-repetition stand-in exactly.
function weightFor(locationId, perLocationStats) {
  const stats = perLocationStats[locationId];
  if (!stats || stats.seenCount === 0) return 3;
  const accuracy = stats.correctCount / stats.seenCount;
  return 1 + (1 - accuracy) * 4;
}

export function pickNextQuestion(pool, { excludeId, perLocationStats = {} } = {}) {
  const candidates = excludeId && pool.length > 1 ? pool.filter((loc) => loc.id !== excludeId) : pool;
  if (!candidates.length) return null;

  const weights = candidates.map((loc) => weightFor(loc.id, perLocationStats));
  const total = weights.reduce((sum, w) => sum + w, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < candidates.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return candidates[i];
  }
  return candidates[candidates.length - 1];
}
