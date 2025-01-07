"use client";

import { useEffect, useState } from "react";
import { Theme, ThemeToggleOptions, UseThemeSwitchReturn } from "@/types/types";

export function useThemeSwitch(): UseThemeSwitchReturn {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  const toggleTheme = ({ theme }: ThemeToggleOptions) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = (): Theme => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref as Theme;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState<Theme>("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme({ theme: newMode });
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme({ theme: mode });
  }, [mode]);

  return [mode, setMode];
}
