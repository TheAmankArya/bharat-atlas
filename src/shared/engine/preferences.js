// App-wide preferences (theme, sound) — genuinely global, unlike quiz progress. A user's
// dark-mode/mute choice shouldn't reset when they switch between Bharat Atlas, Bihar
// Atlas, or any future atlas module, so this lives outside any single module's storage.
const STORAGE_KEY = "atlas-platform:preferences:v1";

function createDefaultState() {
  return { theme: "system", soundEnabled: true, musicEnabled: true };
}

function load() {
  if (typeof localStorage === "undefined") return createDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultState();
    return { ...createDefaultState(), ...JSON.parse(raw) };
  } catch {
    return createDefaultState();
  }
}

function save(state) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing / quota) — session still works, just won't persist
  }
}

export function getPreferences() {
  return load();
}

export function setTheme(theme) {
  const state = load();
  state.theme = theme;
  save(state);
  return state;
}

export function setSoundEnabled(enabled) {
  const state = load();
  state.soundEnabled = enabled;
  save(state);
  return state;
}

export function setMusicEnabled(enabled) {
  const state = load();
  state.musicEnabled = enabled;
  save(state);
  return state;
}
