// Bihar Atlas's own progress store — a separate localStorage namespace from Bharat's (or
// any other atlas module), created via the shared factory so quiz stats never mix.
import { createProgressStore } from "../../../shared/engine/createProgressStore";

export const { getState, recordAttempt, setFilters, recordDailyChallengeCompletion, getDailyChallengeStatus } =
  createProgressStore("bihar-atlas-progress:v1");
