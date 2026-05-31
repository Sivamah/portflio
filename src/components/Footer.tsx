"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--c-text-1)",
      padding: "32px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
    }}>
      <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 6 }}>
        Built with
        <Heart size={13} style={{ color: "var(--c-pink)", fill: "var(--c-pink)" }} />
        by Siva Subramanian M · 2025
      </p>
      <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
        B.E CSE · Dr. N.G.P IT · Coimbatore
      </p>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "rgba(255,255,255,0.6)",
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
