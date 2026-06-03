"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
  const theme = useTheme();
  const isNomad = theme === "nomad";

  return (
    <footer style={{
      background: isNomad ? "var(--c-primary)" : "#030712",
      padding: isNomad ? "28px 56px" : "28px 48px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      flexWrap:"wrap", gap:16,
      borderTop: isNomad ? "none" : "1px solid rgba(59,130,246,0.1)",
    }}>
      <div>
        <p style={{ fontSize:"0.84rem", color:isNomad?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.55)",
          display:"flex", alignItems:"center", gap:6, marginBottom:5,
          fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>
          Built with
          <Heart size={12} style={{ color:isNomad?"rgba(255,255,255,0.8)":"#3B82F6", fill:isNomad?"rgba(255,255,255,0.8)":"#3B82F6" }} />
          by <strong style={{ color:"white" }}>Siva Subramanian M</strong> · 2025
        </p>
        <p style={{ fontSize:"0.72rem", color:isNomad?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.3)",
          fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif",
          letterSpacing:isNomad?"0.02em":"0.04em", textTransform:isNomad?"none":"none" }}>
          {isNomad
            ? "B.E CSE · Dr. N.G.P Institute of Technology · Coimbatore"
            : "B.E CSE // DR. N.G.P INSTITUTE OF TECHNOLOGY // COIMBATORE"}
        </p>
      </div>

      <p style={{ fontSize:"0.72rem",
        color: isNomad?"rgba(255,255,255,0.55)":"rgba(59,130,246,0.45)",
        fontFamily: isNomad?"Playfair Display, serif":"Orbitron, monospace",
        fontStyle: isNomad?"italic":"normal",
        letterSpacing: isNomad?"0.01em":"0.1em",
      }}>
        {isNomad ? "The Nomad's Board — Where Strategy Meets Technology" : "♟️ WHERE STRATEGY MEETS TECHNOLOGY"}
      </p>

      <motion.button
        whileHover={{ scale:1.1, y:-2 }}
        whileTap={{ scale:0.9 }}
        onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
        style={{
          width:38, height:38,
          borderRadius: isNomad ? 8 : 8,
          background: isNomad ? "rgba(255,255,255,0.1)" : "rgba(59,130,246,0.1)",
          border: isNomad ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(59,130,246,0.2)",
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer",
          color: isNomad ? "white" : "#3B82F6",
          boxShadow: !isNomad ? "0 0 12px rgba(59,130,246,0.2)" : "none",
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={15} />
      </motion.button>
    </footer>
  );
}
