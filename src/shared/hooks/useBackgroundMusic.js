import { useCallback, useState } from "react";
import { getPreferences } from "../engine/preferences";
import { isMusicEnabled, setMusicEnabled } from "../engine/musicEngine";

export function useBackgroundMusic() {
  const [enabled, setEnabled] = useState(() => getPreferences().musicEnabled);

  const toggle = useCallback(() => {
    const next = !isMusicEnabled();
    setMusicEnabled(next);
    setEnabled(next);
  }, []);

  return { enabled, toggle };
}
