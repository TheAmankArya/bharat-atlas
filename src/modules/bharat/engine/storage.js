// Bharat Atlas's own progress store — a separate localStorage namespace from any other
// atlas module (e.g. a future Bihar Atlas), created via the shared factory so quiz stats
// never mix between modules.
import { createProgressStore } from "../../../shared/engine/createProgressStore";

export const { getState, recordAttempt, setFilters, recordDailyChallengeCompletion, getDailyChallengeStatus } =
  createProgressStore("bharat-atlas-progress:v1");
