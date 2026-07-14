import { useCallback, useState } from "react";
import { getPreferences } from "../engine/preferences";
import { isSoundEnabled, setSoundEnabled } from "../engine/sound";

export function useSound() {
  const [enabled, setEnabled] = useState(() => getPreferences().soundEnabled);

  const toggle = useCallback(() => {
    const next = !isSoundEnabled();
    setSoundEnabled(next);
    setEnabled(next);
  }, []);

  return { enabled, toggle };
}
