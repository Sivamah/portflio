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
    techBadge: "🏆 AWS Certified",
    color: "var(--c-orange)",
    border: "rgba(200,131,74,0.2)",
    darkBorder: "rgba(255,140,66,0.2)",
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
    techBadge: "⭐ Elite Performer",
    color: "var(--c-primary)",
    border: "rgba(110,139,96,0.2)",
    darkBorder: "rgba(0,229,255,0.2)",
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
    techBadge: "✅ Certified",
    color: "var(--c-teal)",
    border: "rgba(122,175,142,0.2)",
    darkBorder: "rgba(0,191,165,0.2)",
    link: "https://coursera.org",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="certifications" style={{ background: "var(--c-bg)" }}>
      <div ref={ref} className="section">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>{isNature ? "🏅" : "🏆"}</span>
            {isNature ? "Growth Milestones" : "Certifications"}
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>Growth <span className="gradient-text">Milestones</span></>
            ) : (
              <>Achievement <span className="gradient-text">Cards</span></>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 10, maxWidth: 440, fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif", fontStyle: isNature ? "italic" : "normal" }}>
            {isNature
              ? "Each certificate marks a moment of growth — milestones along the journey of becoming."
              : "Professional certifications and academic achievements."}
          </p>
        </motion.div>

        {/* Cert Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="cert-grid-override">
          {certs.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: "var(--c-surface)",
                border: `1px solid ${isNature ? c.border : c.darkBorder}`,
                borderRadius: isNature ? "20px" : "16px",
                padding: "28px 24px",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Nature: subtle leaf accent */}
              {isNature && (
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  fontSize: 80, opacity: 0.05, lineHeight: 1,
                  transform: "rotate(15deg)",
                  userSelect: "none",
                }}>
                  {c.natureIcon}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 52, height: 52,
                borderRadius: isNature ? 14 : 12,
                background: "var(--c-primary-soft)",
                border: `1px solid ${isNature ? c.border : c.darkBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
                flexShrink: 0,
              }}>
                {isNature ? c.natureIcon : c.techIcon}
              </div>

              {/* Badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 12px",
                borderRadius: 99,
                background: "var(--c-primary-soft)",
                color: "var(--c-primary)",
                fontSize: "0.72rem",
                fontWeight: 700,
                width: "fit-content",
                border: `1px solid ${isNature ? c.border : c.darkBorder}`,
              }}>
                {isNature ? c.natureBadge : c.techBadge}
              </div>

              <div>
                <h3 style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--c-text-1)",
                  fontFamily: "Sora, sans-serif",
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--c-text-2)", fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif" }}>
                  {c.issuer}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--c-border-soft)" }}>
                <span style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: c.color,
                  padding: "3px 10px",
                  background: "var(--c-primary-soft)",
                  borderRadius: 99,
                  border: `1px solid ${isNature ? c.border : c.darkBorder}`,
                }}>
                  {c.year}
                </span>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--c-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    transition: "opacity 0.2s",
                    opacity: 0.8,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
                >
                  {isNature ? "See Certificate →" : "Verify →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) { .cert-grid-override { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .cert-grid-override { grid-template-columns: 1fr !important; } }
      `}} />
    </section>
  );
}
