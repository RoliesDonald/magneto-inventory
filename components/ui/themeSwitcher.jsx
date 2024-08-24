"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function ThemeSwitchers() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit p-2 rounded:-md hover:scale-110 hover:text-blue-600 active:scale-100 duration-200 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <BsMoonStars fontSize="1.2rem" />
      ) : (
        <BsSun fontSize="1.2rem" />
      )}
    </button>
  );
}
