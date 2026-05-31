"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (t: string) => {
    const html = document.documentElement;
    html.style.colorScheme = "dark";
    html.classList.remove("dark", "galactic", "light");
    html.classList.add(t);
    localStorage.setItem("theme", t);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "galactic" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="theme-toggle"
      aria-label="Toggle theme"
      id="theme-toggle-btn"
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 9999,
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        background: theme === "dark" ? "#1A1A1E" : "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(0,229,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "var(--shadow-card)",
        transition: "all 0.25s ease",
      }}
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "dark" ? (
          <Moon size={20} style={{ color: "#00E5FF" }} />
        ) : (
          <Rocket size={20} style={{ color: "#00E5FF" }} />
        )}
      </motion.div>
    </motion.button>
  );
}
