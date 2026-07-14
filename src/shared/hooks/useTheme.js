import { useCallback, useEffect, useState } from "react";
import { getPreferences, setTheme as persistTheme } from "../engine/preferences";

function isDarkFor(theme) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyThemeClass(theme) {
  document.documentElement.classList.toggle("dark", isDarkFor(theme));
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => getPreferences().theme);

  useEffect(() => {
    applyThemeClass(theme);
    if (theme !== "system") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => applyThemeClass("system");
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  const setTheme = useCallback((next) => {
    persistTheme(next);
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(isDarkFor(theme) ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, isDark: isDarkFor(theme), setTheme, toggle };
}
