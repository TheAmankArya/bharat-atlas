// Real ambient background track (served from public/audio, not bundled through the JS
// build) that loops quietly behind the app. A plain HTMLAudioElement keeps this simple —
// no Web Audio graph needed — with volume ramped by hand via rAF for a smooth fade
// in/out instead of an abrupt jump.
import { getPreferences, setMusicEnabled as persistMusicEnabled } from "./preferences";

const TRACK_SRC = "/audio/ambient-background.m4a";
const TARGET_VOLUME = 0.35;

let audio = null;
let userWantsMusic = false;
let tabVisible = true;
let fadeRaf = null;

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(TRACK_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    // Never fought over with the map/font/data requests that actually gate first paint —
    // this only kicks in once the visitor has already interacted with the page anyway.
    audio.setAttribute("fetchpriority", "low");
  }
  return audio;
}

function fadeTo(target, seconds) {
  const el = getAudio();
  if (!el) return;
  if (fadeRaf) cancelAnimationFrame(fadeRaf);

  if (target > 0 && el.paused) {
    el.play().catch(() => {
      // Blocked until a user gesture unlocks it — unlockMusicOnGesture() retries this.
    });
  }

  const start = el.volume;
  const startTime = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - startTime) / (seconds * 1000));
    el.volume = Math.min(1, Math.max(0, start + (target - start) * t));
    if (t < 1) {
      fadeRaf = requestAnimationFrame(step);
    } else if (target === 0) {
      el.pause();
    }
  };
  fadeRaf = requestAnimationFrame(step);
}

function applyAudibleState() {
  const shouldPlay = userWantsMusic && tabVisible;
  fadeTo(shouldPlay ? TARGET_VOLUME : 0, shouldPlay ? 2 : 1);
}

export function isMusicEnabled() {
  return getPreferences().musicEnabled;
}

export function setMusicEnabled(enabled) {
  const state = persistMusicEnabled(enabled);
  userWantsMusic = enabled;
  applyAudibleState();
  return state;
}

// Browsers block audio playback until a real user gesture — this is called once from the
// first click/keydown/touch anywhere on the site so the track can actually start if the
// visitor has it enabled.
export function unlockMusicOnGesture() {
  userWantsMusic = isMusicEnabled();
  if (userWantsMusic) applyAudibleState();
}

// Pause while the tab is in the background rather than let it keep playing unheard, and
// resume when the visitor returns.
export function setTabVisible(visible) {
  tabVisible = visible;
  applyAudibleState();
}
