"use client";

import React, { useEffect } from "react";
import { Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const handleThemeThoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-1 rounded-xl dark:bg-background border bg-gray-200 flex items-center">
      <button onClick={handleThemeThoggle}>
        {theme == "dark" ? (
          <Sun className="text-white" />
        ) : (
          <Moon stroke="gray" fill="gray" />
        )}
      </button>
    </div>
  );
}
