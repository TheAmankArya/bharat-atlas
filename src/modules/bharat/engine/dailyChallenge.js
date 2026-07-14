import { ALL_LOCATIONS } from "../../../data/bharat";

// Deterministic mulberry32 PRNG so "today's challenge" is the same set of questions for
// every visitor on a given calendar day, without needing a backend to coordinate it.
function seededRandom(seed) {
  let t = seed;
  return function next() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) hash = (hash * 31 + str.charCodeAt(i)) | 0;
  return hash;
}

export function getDailyChallengeDateKey(date = new Date()) {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

export const DAILY_CHALLENGE_LENGTH = 10;

/** Same 10 locations for everyone on a given date; changes automatically at UTC midnight. */
export function getDailyChallengeQuestions(dateKey = getDailyChallengeDateKey(), count = DAILY_CHALLENGE_LENGTH) {
  const rng = seededRandom(seedFromString(dateKey));
  const shuffled = [...ALL_LOCATIONS];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

/** A fresh, genuinely random single question — unlike the daily challenge, reshuffles every call. */
export function getRandomQuestion() {
  return ALL_LOCATIONS[Math.floor(Math.random() * ALL_LOCATIONS.length)];
}
