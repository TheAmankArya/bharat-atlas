import { getByCategories } from "../../../data/bharat";
import { haversineDistanceKm, isPointInState } from "./geo";

// Real-world border landmarks (Kangchenjunga, Nathu La, ...) sit exactly on or past India's
// actual state boundary — their own listed coordinate can fall just outside every state
// polygon, since that's genuinely where the real border runs. Pure state-membership would
// then mark even a pixel-perfect click on the correct peak as wrong, which is worse than
// what it replaced. So this is a click that lands in the right state OR close to the
// location's own coordinate — either is accepted, not one replacing the other.
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

// Every category (including a plain "state" question, where it's just itself) accepts a
// click anywhere inside the right state — that's what these exams actually reward: knowing
// Kangchenjunga is in Sikkim, not landing a pixel-perfect click on its summit's exact GPS
// coordinate. The distance fallback exists for border landmarks whose own coordinate can
// legitimately sit just outside every state polygon (see note above).
export function checkAnswer(location, clickPoint) {
  const stateNames = location.category === "state" ? [location.name] : location.states;
  if (stateNames.some((name) => isPointInState(clickPoint, name))) return true;

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
