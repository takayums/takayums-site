"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeThoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-1 rounded-xl dark:bg-background border bg-gray-200 flex items-center">
      <button onClick={handleThemeThoggle}>
        {theme == "dark" ? <Sun fill="#fff" /> : <Moon fill="#282c33" />}
      </button>
    </div>
  );
}
