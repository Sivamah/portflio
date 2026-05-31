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
    title: "Started B.E Computer Science Engineering",
    description: "Joined Dr. N.G.P Institute of Technology. Planted the seed of a Computer Science journey.",
    color: "var(--c-primary)",
    border: "rgba(110,139,96,0.2)",
    darkBorder: "rgba(0,229,255,0.2)",
    darkColor: "var(--c-primary)",
  },
  {
    year: "2023",
    natureIcon: "🌿",
    techIcon: "💻",
    natureLabel: "Sapling",
    title: "Core Tech Stack — Java, Python, SQL",
    description: "Grew strong programming fundamentals. Learned Java, Python, SQL and explored web technologies.",
    color: "var(--c-teal)",
    border: "rgba(122,175,142,0.2)",
    darkBorder: "rgba(0,191,165,0.2)",
    darkColor: "var(--c-accent)",
  },
  {
    year: "2024",
    natureIcon: "🌳",
    techIcon: "🤖",
    natureLabel: "Growing Tree",
    title: "Real-World Projects & Cloud Exploration",
    description: "Branched into real-world projects. Built AI-driven applications and explored cloud technologies.",
    color: "var(--c-secondary)",
    border: "rgba(166,124,82,0.2)",
    darkBorder: "rgba(138,43,226,0.2)",
    darkColor: "var(--c-secondary)",
  },
  {
    year: "2025",
    natureIcon: "🍃",
    techIcon: "☁️",
    natureLabel: "Expansion",
    title: "AWS Cloud Internship",
    description: "Expanded into cloud computing. AWS Cloud Internship at App Innovation Technologies.",
    color: "var(--c-orange)",
    border: "rgba(200,131,74,0.2)",
    darkBorder: "rgba(255,140,66,0.2)",
    darkColor: "var(--c-orange)",
  },
  {
    year: "Future",
    natureIcon: "🚀",
    techIcon: "🚀",
    natureLabel: "Full Bloom",
    title: "Software Engineer & Cloud Engineer",
    description: "Reaching full bloom — beginning my professional career building scalable cloud-native architectures and innovative software solutions.",
    color: "var(--c-primary)",
    border: "rgba(110,139,96,0.2)",
    darkBorder: "rgba(0,229,255,0.2)",
    darkColor: "var(--c-primary)",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section
      id="journey"
      className="section-alt"
      style={{ background: "var(--c-surface-2)" }}
    >
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
            My Journey
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>The <span className="gradient-text">Growth</span> Story</>
            ) : (
              <>The Road <span className="gradient-text">So Far</span></>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 12, maxWidth: 480, fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif", fontStyle: isNature ? "italic" : "normal" }}>
            {isNature
              ? "Every great engineer grows from a seed. Here's my growth story — rooted in curiosity, branching into technology."
              : "Every great engineer has a story. Here's mine — a roadmap of growth, learning, and relentless curiosity."}
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div style={{ position: "relative", paddingLeft: "44px" }}>

          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "15px",
              top: 0,
              width: "2px",
              background: isNature
                ? "linear-gradient(to bottom, #6E8B60, #A67C52, #B7C9A8)"
                : "linear-gradient(to bottom, #00E5FF, #8A2BE2, #00BFA5)",
              opacity: 0.4,
              zIndex: 0,
              borderRadius: 99,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
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
                  left: "-44px",
                  top: "26px",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--c-surface)",
                  border: `2px solid ${isNature ? m.color : m.darkColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  boxShadow: isNature
                    ? `0 0 12px ${m.border.replace("0.2", "0.3")}`
                    : `0 0 18px ${m.darkBorder.replace("0.2", "0.5")}`,
                  zIndex: 1,
                }}>
                  {isNature ? m.natureIcon : m.techIcon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  style={{
                    background: "var(--c-surface)",
                    border: `1px solid ${isNature ? m.border : m.darkBorder}`,
                    borderRadius: isNature ? "20px" : "16px",
                    padding: "24px 28px",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div>
                      {/* Year + nature label */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{
                          color: isNature ? m.color : m.darkColor,
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                        }}>
                          {m.year}
                        </span>
                        {isNature && (
                          <span style={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: "var(--c-text-3)",
                            background: "var(--c-surface-2)",
                            padding: "2px 10px",
                            borderRadius: 99,
                            border: "1px solid var(--c-border)",
                          }}>
                            {m.natureLabel}
                          </span>
                        )}
                      </div>
                      <h3 style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--c-text-1)",
                        fontFamily: "Sora, sans-serif",
                        marginBottom: 8,
                        lineHeight: 1.35,
                      }}>
                        {m.title}
                      </h3>
                      <p style={{
                        fontSize: "0.85rem",
                        color: "var(--c-text-2)",
                        lineHeight: 1.65,
                        fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif",
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
