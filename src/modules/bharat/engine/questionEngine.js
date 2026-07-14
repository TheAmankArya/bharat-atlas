import { getByCategories } from "../../../data/bharat";
import { haversineDistanceKm, isPointInState } from "./geo";

// Point-based categories (everything except polygon-tested ones like "state") are scored
// by great-circle distance to the target; states are scored by exact boundary containment.
const DISTANCE_THRESHOLD_KM = { easy: 120, medium: 70, hard: 35 };

// `subcategory`/`tag` are fixed narrowing filters set at launch time (e.g. a "Tiger
// Reserves" topic chip narrowing Forest & Wildlife Mode down to just tiger reserves) —
// distinct from `difficulty`/`region`, which the user can change mid-session via FilterPanel.
export function getQuestionPool(mode, { difficulty, region, subcategory, tag } = {}) {
  let pool = getByCategories(mode.categories);
  if (difficulty) pool = pool.filter((loc) => loc.difficulty === difficulty);
  if (region) pool = pool.filter((loc) => loc.region === region);
  if (subcategory) {
    const allowed = Array.isArray(subcategory) ? subcategory : [subcategory];
    pool = pool.filter((loc) => allowed.includes(loc.subcategory));
  }
  if (tag) pool = pool.filter((loc) => loc.tags?.includes(tag));
  return pool;
}

export function checkAnswer(location, clickPoint) {
  if (location.category === "state") {
    return isPointInState(clickPoint, location.name);
  }
  const thresholdKm = DISTANCE_THRESHOLD_KM[location.difficulty] ?? 80;
  return haversineDistanceKm(location.coordinates, clickPoint) <= thresholdKm;
}

// Locations never seen (or seen but never right) are weighted higher, so the quiz keeps
// surfacing the full breadth of a mode while leaning toward what the user gets wrong —
// a lightweight, dependency-free stand-in for spaced repetition.
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
