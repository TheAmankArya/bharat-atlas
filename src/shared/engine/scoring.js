export function createEmptyStats() {
  return { attempted: 0, correct: 0, wrong: 0, currentStreak: 0, bestStreak: 0 };
}

export function applyAttempt(stats, isCorrect) {
  const currentStreak = isCorrect ? stats.currentStreak + 1 : 0;
  return {
    attempted: stats.attempted + 1,
    correct: stats.correct + (isCorrect ? 1 : 0),
    wrong: stats.wrong + (isCorrect ? 0 : 1),
    currentStreak,
    bestStreak: Math.max(stats.bestStreak, currentStreak),
  };
}

export function computeAccuracy(stats) {
  if (!stats.attempted) return 0;
  return Math.round((stats.correct / stats.attempted) * 100);
}
