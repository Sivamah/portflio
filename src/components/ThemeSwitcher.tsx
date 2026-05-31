"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "nature" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
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

  const themes: { key: Theme; emoji: string; label: string; desc: string }[] = [
    { key: "nature", emoji: "🌿", label: "Nature", desc: "Nature & Growth" },
    { key: "dark",   emoji: "♟️", label: "Quantum", desc: "Quantum Rook" },
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
        gap: 10,
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
          background: theme === "dark"
            ? "rgba(10,15,35,0.96)"
            : "rgba(255,255,255,0.96)",
          border: theme === "dark"
            ? "1px solid rgba(59,130,246,0.25)"
            : "1px solid rgba(110,139,96,0.2)",
          borderRadius: 12,
          padding: "5px",
          boxShadow: theme === "dark"
            ? "0 8px 32px rgba(0,0,0,0.8), 0 0 0 1px rgba(59,130,246,0.1), 0 0 20px rgba(59,130,246,0.1)"
            : "0 8px 32px rgba(46,58,47,0.12)",
          backdropFilter: "blur(20px)",
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
                padding: "8px 14px",
                borderRadius: 8,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: theme === "dark" ? "Space Grotesk, sans-serif" : "Inter, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: theme === "dark" ? "0.05em" : "0",
                color: isActive
                  ? "#fff"
                  : theme === "dark" ? "#94A3B8" : "#6D746A",
                zIndex: 1,
                transition: "color 0.2s ease",
                textTransform: theme === "dark" ? "uppercase" : "none",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-pill-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 8,
                    background: t.key === "dark"
                      ? "linear-gradient(135deg, #3B82F6, #8B5CF6)"
                      : "linear-gradient(135deg, #6E8B60, #A67C52)",
                    zIndex: -1,
                    boxShadow: t.key === "dark"
                      ? "0 0 20px rgba(59,130,246,0.5)"
                      : "none",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span style={{ fontSize: "0.95rem" }}>{t.emoji}</span>
              <span>{t.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: theme === "dark"
              ? "rgba(59,130,246,0.55)"
              : "rgba(110,139,96,0.65)",
            textAlign: "right",
            paddingRight: 2,
            fontFamily: theme === "dark" ? "Orbitron, monospace" : "Inter, sans-serif",
          }}
        >
          {themes.find((t) => t.key === theme)?.desc}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
