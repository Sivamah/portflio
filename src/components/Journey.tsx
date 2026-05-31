"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2022",
    icon: "🎓",
    title: "Started B.E Computer Science Engineering",
    description: "Joined Dr. N.G.P Institute of Technology. Began the journey into Computer Science Engineering.",
    color: "var(--c-primary)",
    border: "rgba(0,229,255,0.2)",
    shadow: "rgba(0,229,255,0.4)"
  },
  {
    year: "2023",
    icon: "💻",
    title: "Learned Java, Python, SQL and Core Programming",
    description: "Built strong programming fundamentals and explored foundational computer science concepts.",
    color: "var(--c-accent)",
    border: "rgba(0,191,165,0.2)",
    shadow: "rgba(0,191,165,0.4)"
  },
  {
    year: "2024",
    icon: "🤖",
    title: "Built Real World Projects",
    description: "Applied skills to build impactful real-world projects, honing problem-solving and system design abilities.",
    color: "var(--c-secondary)",
    border: "rgba(138,43,226,0.2)",
    shadow: "rgba(138,43,226,0.4)"
  },
  {
    year: "2025",
    icon: "☁️",
    title: "AWS Internship",
    description: "AWS Cloud Internship at App Innovation Technologies. Active placement preparation.",
    color: "var(--c-primary)",
    border: "rgba(0,229,255,0.2)",
    shadow: "rgba(0,229,255,0.4)"
  },
  {
    year: "Future",
    icon: "🚀",
    title: "Software Engineer & Cloud Engineer",
    description: "Beginning my professional career building scalable cloud-native architectures and innovative software solutions.",
    color: "var(--c-accent)",
    border: "rgba(0,191,165,0.2)",
    shadow: "rgba(0,191,165,0.4)"
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="journey" style={{ background: "var(--c-surface-2)", position: "relative" }}>
      <div ref={ref} className="section" style={{ position: "relative" }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">
            <span>📍</span>
            My Journey
          </div>
          <h2 className="text-section-title font-display">
            The Road <span className="gradient-text">So Far</span>
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 12, maxWidth: 480 }}>
            Every great engineer has a story. Here&apos;s mine — a roadmap of growth, learning, and relentless curiosity.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div style={{ position: "relative", paddingLeft: "40px" }} className="journey-timeline">
          
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "14px",
              top: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--c-primary), var(--c-secondary), var(--c-accent))",
              opacity: 0.3,
              zIndex: 0
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                style={{ position: "relative" }}
              >
                {/* Glowing Checkpoint Node */}
                <div style={{
                  position: "absolute",
                  left: "-40px",
                  top: "24px",
                  transform: "translateY(-50%)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--c-bg)",
                  border: `2px solid ${m.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 15px ${m.shadow}`,
                  zIndex: 1
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: m.color }} />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    background: "var(--c-surface)",
                    border: `1px solid ${m.border}`,
                    borderRadius: "var(--radius)",
                    padding: "24px 32px",
                    boxShadow: "var(--shadow-card)",
                    position: "relative",
                  }}
                  className="journey-card"
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${m.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                      flexShrink: 0
                    }}>
                      {m.icon}
                    </div>

                    <div>
                      <div style={{
                        display: "inline-block",
                        color: m.color,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        marginBottom: "4px"
                      }}>
                        {m.year}
                      </div>
                      <h3 style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--c-text-1)",
                        fontFamily: "Sora, sans-serif",
                        marginBottom: "8px",
                        lineHeight: 1.3
                      }}>
                        {m.title}
                      </h3>
                      <p style={{
                        fontSize: "0.85rem",
                        color: "var(--c-text-2)",
                        lineHeight: 1.6
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
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .journey-card {
            padding: 20px !important;
          }
        }
      `}} />
    </section>
  );
}
