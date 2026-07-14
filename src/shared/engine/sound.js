// Small synthesized sound set via the Web Audio API — no audio files to source/host,
// so it stays free and self-contained. Every sound is a short envelope-shaped tone.
import { getPreferences, setSoundEnabled as persistSoundEnabled } from "./preferences";

let audioCtx = null;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone(ctx, { freq, start, duration, type = "sine", peak = 0.18 }) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t0 = ctx.currentTime + start;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(peak, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.05);
}

export function isSoundEnabled() {
  return getPreferences().soundEnabled;
}

export function setSoundEnabled(enabled) {
  return persistSoundEnabled(enabled);
}

export function playCorrectSound() {
  if (!isSoundEnabled()) return;
  const ctx = getContext();
  if (!ctx) return;
  // Bright ascending major triad — C5, E5, G5
  tone(ctx, { freq: 523.25, start: 0, duration: 0.16 });
  tone(ctx, { freq: 659.25, start: 0.07, duration: 0.18 });
  tone(ctx, { freq: 783.99, start: 0.14, duration: 0.28, peak: 0.16 });
}

export function playWrongSound() {
  if (!isSoundEnabled()) return;
  const ctx = getContext();
  if (!ctx) return;
  // Soft descending minor second — understated, not harsh
  tone(ctx, { freq: 233.08, start: 0, duration: 0.22, type: "triangle", peak: 0.14 });
  tone(ctx, { freq: 196.0, start: 0.09, duration: 0.28, type: "triangle", peak: 0.12 });
}

export function playClickSound() {
  if (!isSoundEnabled()) return;
  const ctx = getContext();
  if (!ctx) return;
  tone(ctx, { freq: 880, start: 0, duration: 0.06, peak: 0.06 });
}
