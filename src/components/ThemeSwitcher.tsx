"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "nature" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("nature");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("portfolio-theme") as Theme) || "dark";
    applyTheme(saved);
    setTheme(saved);
    setMounted(true);
  }, []);

  function applyTheme(t: Theme) {
    const html = document.documentElement;
    html.classList.remove("nature", "dark", "galactic");
    if (t === "dark") html.classList.add("dark");
    localStorage.setItem("portfolio-theme", t);
  }

  function switchTheme(t: Theme) {
    setTheme(t);
    applyTheme(t);
  }

  if (!mounted) return null;

  const themes: { key: Theme; emoji: string; label: string }[] = [
    { key: "nature", emoji: "🌿", label: "Nature" },
    { key: "dark",   emoji: "🌌", label: "Tech" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
      }}
    >
      {/* Theme pill */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          background: theme === "dark" ? "rgba(26,26,30,0.95)" : "rgba(255,255,255,0.95)",
          border: theme === "dark" ? "1px solid rgba(0,229,255,0.15)" : "1px solid rgba(110,139,96,0.2)",
          borderRadius: 99,
          padding: "5px",
          boxShadow: theme === "dark"
            ? "0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(0,229,255,0.1)"
            : "0 8px 32px rgba(46,58,47,0.12), 0 2px 8px rgba(110,139,96,0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        {themes.map((t) => {
          const isActive = theme === t.key;
          return (
            <motion.button
              key={t.key}
              onClick={() => switchTheme(t.key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 99,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: isActive
                  ? "#fff"
                  : theme === "dark" ? "#9EA4AB" : "#6D746A",
                zIndex: 1,
                transition: "color 0.2s ease",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-pill-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 99,
                    background: t.key === "dark"
                      ? "linear-gradient(135deg, #00E5FF, #8A2BE2)"
                      : "linear-gradient(135deg, #6E8B60, #A67C52)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span style={{ fontSize: "1rem" }}>{t.emoji}</span>
              <span>{t.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Theme label tooltip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: theme === "dark" ? "rgba(0,229,255,0.6)" : "rgba(110,139,96,0.7)",
            textAlign: "right",
            paddingRight: 4,
          }}
        >
          {theme === "dark" ? "Deep Abyssal Tech" : "Nature & Growth"}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
