"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <footer style={{
      background: isNature ? "#2E3A2F" : "#0D0D11",
      padding: "32px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      borderTop: isNature ? "1px solid rgba(110,139,96,0.2)" : "1px solid rgba(0,229,255,0.08)",
    }}>
      <div>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          {isNature ? "🌿 " : ""}Built with
          <Heart size={13} style={{ color: isNature ? "#B7C9A8" : "#FF6B9D", fill: isNature ? "#B7C9A8" : "#FF6B9D" }} />
          by <strong style={{ color: "white" }}>Siva Subramanian M</strong> · 2025
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
          B.E CSE · Dr. N.G.P Institute of Technology · Coimbatore
        </p>
      </div>

      <p style={{
        fontSize: "0.78rem",
        color: isNature ? "rgba(183,201,168,0.6)" : "rgba(0,229,255,0.4)",
        fontStyle: isNature ? "italic" : "normal",
        fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif",
      }}>
        {isNature ? "🌱 Growing every day." : "⚡ Building the future."}
      </p>

      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          width: 40,
          height: 40,
          borderRadius: isNature ? "50%" : "10px",
          background: isNature ? "rgba(110,139,96,0.2)" : "rgba(0,229,255,0.08)",
          border: isNature ? "1px solid rgba(110,139,96,0.3)" : "1px solid rgba(0,229,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: isNature ? "#B7C9A8" : "rgba(0,229,255,0.7)",
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
