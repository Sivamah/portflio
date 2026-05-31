"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const milestones = [
  {
    year: "2022",
    natureIcon: "🌱",
    techIcon: "🎓",
    natureLabel: "Seed",
    qrLabel: "INITIATION",
    title: "Started CSE Journey",
    techTitle: "CSE JOURNEY INITIALIZED",
    description: "Joined Dr. N.G.P Institute of Technology. Began Computer Science Engineering program.",
    color: "#3B82F6",
    natureColor: "var(--c-primary)",
  },
  {
    year: "2023",
    natureIcon: "🌿",
    techIcon: "💻",
    natureLabel: "Sapling",
    qrLabel: "CORE MODULES",
    title: "Learned Java & Python",
    techTitle: "CORE STACK ACQUIRED",
    description: "Mastered Java, Python, and SQL. Built strong programming fundamentals and data structure skills.",
    color: "#8B5CF6",
    natureColor: "var(--c-teal)",
  },
  {
    year: "2024",
    natureIcon: "🌳",
    techIcon: "🚀",
    natureLabel: "Growing Tree",
    qrLabel: "DEPLOYMENT",
    title: "Built Real Projects",
    techTitle: "PROJECTS DEPLOYED",
    description: "Deployed real-world applications. Built AI-driven chess assistant and full-stack web platforms.",
    color: "#00E5FF",
    natureColor: "var(--c-secondary)",
  },
  {
    year: "2025",
    natureIcon: "🍃",
    techIcon: "☁️",
    natureLabel: "Expansion",
    qrLabel: "CLOUD OPS",
    title: "AWS Internship",
    techTitle: "AWS CLOUD OPERATIONS",
    description: "AWS Cloud Internship at App Innovation Technologies. Cloud architecture and deployment expertise.",
    color: "#F59E0B",
    natureColor: "var(--c-orange)",
  },
  {
    year: "FUTURE",
    natureIcon: "🚀",
    techIcon: "⚡",
    natureLabel: "Full Bloom",
    qrLabel: "MISSION TARGET",
    title: "Software & Cloud Engineer",
    techTitle: "TARGET: SOFTWARE + CLOUD ENGINEER",
    description: "Mission target — Software Engineer and Cloud Engineer building impactful, scalable solutions.",
    color: "#22C55E",
    natureColor: "var(--c-primary)",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="journey" style={{ background: isNature ? "var(--c-surface-2)" : "#0A0F1E", position: "relative" }}>
      {/* QR grid background */}
      {!isNature && (
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
      )}

      <div ref={ref} className="section" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">
            <span>{isNature ? "🌱" : "📍"}</span>
            {isNature ? "My Journey" : "NAVIGATION LOG"}
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>The <span className="gradient-text">Growth</span> Story</>
            ) : (
              <span className="gradient-text glow-text">THE ROUTE</span>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 10, maxWidth: 480, fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif", fontStyle: isNature ? "italic" : "normal", fontSize: "0.88rem", letterSpacing: isNature ? "0" : "0.03em" }}>
            {isNature
              ? "Every great engineer grows from a seed. Here's my growth story — rooted in curiosity, branching into technology."
              : "MISSION TIMELINE // Charting the strategic milestones of a software engineering career in progress."}
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div style={{ position: "relative", paddingLeft: "52px" }}>
          {/* Neon route line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="neon-route-line"
            style={{ height: "100%" }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.18 }}
                style={{ position: "relative" }}
              >
                {/* Checkpoint node */}
                <div style={{
                  position: "absolute",
                  left: "-52px",
                  top: "24px",
                  transform: "translateY(-50%)",
                  width: isNature ? "30px" : "32px",
                  height: isNature ? "30px" : "32px",
                  borderRadius: "50%",
                  background: isNature ? "var(--c-surface)" : "#0A0F1E",
                  border: `2px solid ${m.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  boxShadow: isNature
                    ? `0 0 8px ${m.color}30`
                    : `0 0 20px ${m.color}60, 0 0 40px ${m.color}20`,
                  zIndex: 1,
                }}>
                  {isNature ? m.natureIcon : m.techIcon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: isNature ? 8 : 4, borderColor: m.color }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{
                    background: isNature ? "var(--c-surface)" : "#0F172A",
                    border: `1px solid ${isNature ? "var(--c-border)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: isNature ? "20px" : "12px",
                    padding: "22px 26px",
                    boxShadow: isNature ? "var(--shadow-card)" : "var(--shadow-card)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* QR accent line top */}
                  {!isNature && (
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${m.color}, transparent)` }} />
                  )}

                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{
                          color: m.color,
                          fontSize: isNature ? "0.85rem" : "0.72rem",
                          fontWeight: 700,
                          fontFamily: isNature ? "Sora, sans-serif" : "Orbitron, monospace",
                          letterSpacing: isNature ? "0.04em" : "0.15em",
                        }}>
                          {m.year}
                        </span>
                        <span style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: isNature ? "var(--c-text-3)" : "var(--c-text-3)",
                          background: isNature ? "var(--c-surface-2)" : "rgba(255,255,255,0.05)",
                          padding: "2px 8px",
                          borderRadius: isNature ? 99 : 4,
                          border: `1px solid ${isNature ? "var(--c-border)" : "rgba(255,255,255,0.06)"}`,
                          fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif",
                          letterSpacing: isNature ? "0" : "0.08em",
                          textTransform: isNature ? "none" : "uppercase",
                        }}>
                          {isNature ? m.natureLabel : m.qrLabel}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: isNature ? "1rem" : "0.88rem",
                        fontWeight: 700,
                        color: "var(--c-text-1)",
                        fontFamily: isNature ? "Sora, sans-serif" : "Space Grotesk, sans-serif",
                        letterSpacing: isNature ? "0" : "0.05em",
                        textTransform: isNature ? "none" : "uppercase",
                        marginBottom: 8,
                        lineHeight: 1.35,
                      }}>
                        {isNature ? m.title : m.techTitle}
                      </h3>
                      <p style={{
                        fontSize: "0.84rem",
                        color: "var(--c-text-2)",
                        lineHeight: 1.65,
                        fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif",
                        fontStyle: isNature ? "italic" : "normal",
                      }}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
