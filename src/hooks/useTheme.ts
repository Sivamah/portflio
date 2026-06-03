"use client";

import { useEffect, useState } from "react";

export function useTheme(): "nomad" | "dark" {
  const [theme, setTheme] = useState<"nomad" | "dark">("dark");

  useEffect(() => {
    const read = (): "nomad" | "dark" => {
      const raw = localStorage.getItem("portfolio-theme");
      if (raw === "nature") return "nomad";
      return raw === "dark" ? "dark" : "dark";
    };
    setTheme(read());

    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "nomad");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
