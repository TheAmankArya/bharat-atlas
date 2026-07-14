import { applyAttempt, createEmptyStats } from "./scoring";

// A factory, not a singleton — each atlas module (Bharat, and later Bihar) calls this
// with its own storage key to get an independent, same-shaped progress store. Keeps
// per-module quiz stats from ever mixing, without duplicating this logic per module.
function createDefaultState() {
  return {
    version: 1,
    overallStats: createEmptyStats(),
    perMode: {},
    perLocation: {},
    filters: { difficulty: null, region: null },
    dailyChallenge: null, // { dateKey, correctCount, totalCount }
  };
}

export function createProgressStore(storageKey) {
  function load() {
    if (typeof localStorage === "undefined") return createDefaultState();
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return createDefaultState();
      const parsed = JSON.parse(raw);
      if (parsed.version !== 1) return createDefaultState(); // future migrations go here
      return { ...createDefaultState(), ...parsed };
    } catch {
      return createDefaultState();
    }
  }

  function save(state) {
    if (typeof localStorage === "undefined") return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // localStorage unavailable — session still works, just won't persist
    }
  }

  function getState() {
    return load();
  }

  function recordAttempt({ modeId, locationId, isCorrect }) {
    const state = load();

    state.overallStats = applyAttempt(state.overallStats, isCorrect);
    state.perMode[modeId] = applyAttempt(state.perMode[modeId] ?? createEmptyStats(), isCorrect);

    const locStats = state.perLocation[locationId] ?? { seenCount: 0, correctCount: 0, lastSeenAt: null };
    state.perLocation[locationId] = {
      seenCount: locStats.seenCount + 1,
      correctCount: locStats.correctCount + (isCorrect ? 1 : 0),
      lastSeenAt: Date.now(),
    };

    save(state);
    return state;
  }

  function setFilters(filters) {
    const state = load();
    state.filters = { ...state.filters, ...filters };
    save(state);
    return state;
  }

  function recordDailyChallengeCompletion({ dateKey, correctCount, totalCount }) {
    const state = load();
    state.dailyChallenge = { dateKey, correctCount, totalCount };
    save(state);
    return state;
  }

  /** Returns today's completion record, or null if today's challenge hasn't been finished yet. */
  function getDailyChallengeStatus(dateKey) {
    const state = load();
    return state.dailyChallenge?.dateKey === dateKey ? state.dailyChallenge : null;
  }

  return { getState, recordAttempt, setFilters, recordDailyChallengeCompletion, getDailyChallengeStatus };
}
