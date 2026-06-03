"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "nomad" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // migrate old "nature" key to "nomad"
    const raw = localStorage.getItem("portfolio-theme");
    const saved: Theme = raw === "nature" ? "nomad" : raw === "dark" ? "dark" : "dark";
    applyTheme(saved);
    setTheme(saved);
    setMounted(true);
  }, []);

  function applyTheme(t: Theme) {
    const html = document.documentElement;
    html.classList.remove("nature", "dark", "nomad");
    if (t === "dark") html.classList.add("dark");
    // nomad = no class (uses :root)
    localStorage.setItem("portfolio-theme", t);
  }

  function switchTheme(t: Theme) {
    setTheme(t);
    applyTheme(t);
  }

  if (!mounted) return null;

  const themes: { key: Theme; emoji: string; label: string; desc: string }[] = [
    { key: "nomad", emoji: "🏛️", label: "Nomad",   desc: "The Nomad's Board" },
    { key: "dark",  emoji: "♟️", label: "Quantum", desc: "Quantum Rook" },
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
        gap: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          background: theme === "dark"
            ? "rgba(10,15,35,0.97)"
            : "rgba(255,255,255,0.97)",
          border: theme === "dark"
            ? "1px solid rgba(59,130,246,0.2)"
            : "1px solid #E5E7EB",
          borderRadius: 10,
          padding: "4px",
          boxShadow: theme === "dark"
            ? "0 8px 32px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.08)"
            : "0 4px 20px rgba(0,0,0,0.08)",
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
                borderRadius: 7,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: theme === "dark" ? "Space Grotesk, sans-serif" : "DM Sans, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: theme === "dark" ? "0.05em" : "0.02em",
                color: isActive
                  ? "#fff"
                  : theme === "dark" ? "#94A3B8" : "#5B6472",
                zIndex: 1,
                transition: "color 0.2s ease",
                textTransform: theme === "dark" ? "uppercase" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="theme-pill-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 7,
                    background: t.key === "dark"
                      ? "linear-gradient(135deg, #3B82F6, #8B5CF6)"
                      : "linear-gradient(135deg, #163A63, #2F5D8A)",
                    zIndex: -1,
                    boxShadow: t.key === "dark"
                      ? "0 0 16px rgba(59,130,246,0.4)"
                      : "0 2px 8px rgba(22,58,99,0.25)",
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>{t.emoji}</span>
              <span>{t.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          style={{
            fontSize: "0.58rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: theme === "dark"
              ? "rgba(59,130,246,0.5)"
              : "rgba(22,58,99,0.45)",
            textAlign: "right",
            paddingRight: 2,
            fontFamily: theme === "dark" ? "Orbitron, monospace" : "DM Sans, sans-serif",
          }}
        >
          {themes.find((t) => t.key === theme)?.desc}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
