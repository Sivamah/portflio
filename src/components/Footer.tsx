"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <footer style={{
      background: isNature ? "#2E3A2F" : "#030712",
      padding: "28px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      borderTop: isNature ? "1px solid rgba(110,139,96,0.2)" : "1px solid rgba(59,130,246,0.1)",
    }}>
      <div>
        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 6, marginBottom: 4, fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif" }}>
          {isNature ? "🌿 " : "♟️ "}Built with
          <Heart size={12} style={{ color: isNature ? "#B7C9A8" : "#3B82F6", fill: isNature ? "#B7C9A8" : "#3B82F6" }} />
          by <strong style={{ color: "white" }}>Siva Subramanian M</strong> · 2025
        </p>
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif", fontStyle: isNature ? "italic" : "normal", letterSpacing: isNature ? "0" : "0.04em" }}>
          {isNature
            ? "B.E CSE · Dr. N.G.P Institute of Technology · Coimbatore"
            : "B.E CSE // DR. N.G.P INSTITUTE OF TECHNOLOGY // COIMBATORE"}
        </p>
      </div>

      <p style={{
        fontSize: "0.72rem",
        color: isNature ? "rgba(183,201,168,0.5)" : "rgba(59,130,246,0.45)",
        fontFamily: isNature ? "Lora, serif" : "Orbitron, monospace",
        fontStyle: isNature ? "italic" : "normal",
        letterSpacing: isNature ? "0" : "0.1em",
      }}>
        {isNature ? "🌱 Growing every day." : "♟️ WHERE STRATEGY MEETS TECHNOLOGY"}
      </p>

      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          width: 38,
          height: 38,
          borderRadius: isNature ? "50%" : "8px",
          background: isNature ? "rgba(110,139,96,0.2)" : "rgba(59,130,246,0.1)",
          border: isNature ? "1px solid rgba(110,139,96,0.3)" : "1px solid rgba(59,130,246,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: isNature ? "#B7C9A8" : "#3B82F6",
          boxShadow: !isNature ? "0 0 12px rgba(59,130,246,0.2)" : "none",
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={15} />
      </motion.button>
    </footer>
  );
}
