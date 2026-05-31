"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const certs = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    natureIcon: "🍀",
    techIcon: "☁️",
    natureBadge: "🌱 Cloud Growth Milestone",
    techBadge: "AWS CERTIFIED",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
    border: "rgba(245,158,11,0.25)",
    bgGrad: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.05))",
    link: "https://aws.amazon.com/verification",
  },
  {
    id: 2,
    title: "NPTEL Elite Certificate",
    issuer: "National Programme on Technology Enhanced Learning",
    year: "2024",
    natureIcon: "🌟",
    techIcon: "🎓",
    natureBadge: "🌿 Elite Bloom",
    techBadge: "ELITE PERFORMER",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.3)",
    border: "rgba(59,130,246,0.25)",
    bgGrad: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.05))",
    link: "https://nptel.ac.in",
  },
  {
    id: 3,
    title: "C++ Programming",
    issuer: "Coursera / NPTEL",
    year: "2023",
    natureIcon: "🌿",
    techIcon: "⚙️",
    natureBadge: "🌱 First Roots",
    techBadge: "CERTIFIED",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.3)",
    border: "rgba(139,92,246,0.25)",
    bgGrad: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05))",
    link: "https://coursera.org",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="certifications" style={{ background: isNature ? "var(--c-bg)" : "#0A0F1E", position: "relative" }}>
      {!isNature && (
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
      )}

      <div ref={ref} className="section" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>{isNature ? "🏅" : "🏆"}</span>
            {isNature ? "Growth Milestones" : "ACHIEVEMENTS"}
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>Growth <span className="gradient-text">Milestones</span></>
            ) : (
              <span className="gradient-text glow-text">ACHIEVEMENTS &amp; CERTIFICATIONS</span>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 10, maxWidth: 440, fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif", fontStyle: isNature ? "italic" : "normal", fontSize: "0.86rem" }}>
            {isNature
              ? "Each certificate marks a moment of growth — milestones along the journey."
              : "MISSION CREDENTIALS // Verified achievements unlocked on the engineering path."}
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="cert-grid-override">
          {certs.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={isNature
                ? { y: -8, scale: 1.02 }
                : { y: -6, borderColor: c.border, boxShadow: `0 0 30px ${c.glow}, 0 8px 32px rgba(0,0,0,0.5)` }
              }
              style={{
                background: isNature ? "var(--c-surface)" : "#0F172A",
                border: `1px solid ${isNature ? "rgba(110,139,96,0.12)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: isNature ? "20px" : "12px",
                padding: "26px 22px",
                boxShadow: isNature ? "var(--shadow-card)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* QR: holographic top accent */}
              {!isNature && (
                <>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${c.color}, transparent)`, boxShadow: `0 0 8px ${c.color}` }} />
                  <div style={{ position: "absolute", inset: 0, background: c.bgGrad, pointerEvents: "none" }} />
                  {/* Holographic shimmer */}
                  <div style={{ position: "absolute", top: 0, left: "-100%", right: 0, bottom: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)", animation: "holographic-shine 4s ease-in-out infinite", pointerEvents: "none" }} />
                </>
              )}

              {/* Nature: leaf watermark */}
              {isNature && (
                <div style={{ position: "absolute", top: -20, right: -20, fontSize: 80, opacity: 0.05, lineHeight: 1, transform: "rotate(15deg)", userSelect: "none" }}>
                  {c.natureIcon}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 50, height: 50,
                borderRadius: isNature ? 14 : 10,
                background: isNature ? "var(--c-primary-soft)" : `rgba(${c.color === "#F59E0B" ? "245,158,11" : c.color === "#3B82F6" ? "59,130,246" : "139,92,246"},0.12)`,
                border: `1px solid ${isNature ? "var(--c-border)" : c.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
                boxShadow: !isNature ? `0 0 16px ${c.glow}` : "none",
                position: "relative",
                zIndex: 1,
              }}>
                {isNature ? c.natureIcon : c.techIcon}
              </div>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center",
                padding: "4px 10px",
                borderRadius: isNature ? 99 : 4,
                background: isNature ? "var(--c-primary-soft)" : `rgba(${c.color === "#F59E0B" ? "245,158,11" : c.color === "#3B82F6" ? "59,130,246" : "139,92,246"},0.1)`,
                color: c.color,
                fontSize: isNature ? "0.72rem" : "0.62rem",
                fontWeight: 700,
                width: "fit-content",
                border: `1px solid ${isNature ? "var(--c-border)" : c.border}`,
                fontFamily: isNature ? "Inter" : "Orbitron, monospace",
                letterSpacing: isNature ? "0" : "0.1em",
                boxShadow: !isNature ? `0 0 10px ${c.glow}` : "none",
                position: "relative",
                zIndex: 1,
              }}>
                {isNature ? c.natureBadge : c.techBadge}
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{
                  fontSize: isNature ? "1.05rem" : "0.88rem",
                  fontWeight: 700,
                  color: "var(--c-text-1)",
                  fontFamily: isNature ? "Sora, sans-serif" : "Space Grotesk, sans-serif",
                  letterSpacing: isNature ? "0" : "0.04em",
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.76rem", color: "var(--c-text-2)", fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif" }}>
                  {c.issuer}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: `1px solid ${isNature ? "var(--c-border-soft)" : "rgba(255,255,255,0.05)"}`, position: "relative", zIndex: 1 }}>
                <span style={{
                  fontSize: "0.75rem", fontWeight: 800,
                  color: c.color,
                  padding: "3px 10px",
                  background: isNature ? "var(--c-primary-soft)" : "rgba(255,255,255,0.04)",
                  borderRadius: isNature ? 99 : 4,
                  border: `1px solid ${isNature ? "var(--c-border)" : c.border}`,
                  fontFamily: isNature ? "Inter" : "Orbitron, monospace",
                  letterSpacing: isNature ? "0" : "0.1em",
                }}>
                  {c.year}
                </span>
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", fontWeight: 700, color: c.color, display: "flex", alignItems: "center", gap: 4, transition: "opacity 0.2s", opacity: 0.8, fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif", letterSpacing: "0.04em" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}>
                  {isNature ? "See Certificate →" : "VERIFY →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) { .cert-grid-override { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .cert-grid-override { grid-template-columns: 1fr !important; } }
        @keyframes holographic-shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}} />
    </section>
  );
}
