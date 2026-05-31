"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Star, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const interests = [
  { label: "Cloud Computing", icon: "☁️", color: "var(--c-orange)" },
  { label: "AI Applications", icon: "🤖", color: "var(--c-secondary)" },
  { label: "Backend Development", icon: "⚙️", color: "var(--c-primary)" },
  { label: "Web Development", icon: "🌐", color: "var(--c-accent)" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="about" style={{ background: "var(--c-surface-2)" }}>
      <div ref={ref} className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>{isNature ? "🌱" : "👤"}</span>
            About Me
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>The <span className="gradient-text">Gardener</span> Behind the Code</>
            ) : (
              <>The Person <span className="gradient-text">Behind the Code</span></>
            )}
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: 32, textAlign: "center" }}>
              {/* Profile Photo */}
              <div style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "var(--g-profile-border)",
                padding: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "var(--shadow-profile)",
              }}>
                <img
                  src="/profile.png"
                  alt="Siva Subramanian M"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    background: "var(--c-surface)",
                  }}
                />
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 4 }}>
                Siva Subramanian M
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--c-primary)", fontWeight: 600, marginBottom: 20 }}>
                Computer Science Engineering Student
              </p>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                textAlign: "left",
                background: "var(--c-surface-2)",
                borderRadius: 16,
                padding: "20px",
                marginBottom: 20,
              }}>
                {[
                  { icon: GraduationCap, label: "College", value: "Dr. N.G.P Institute of Technology" },
                  { icon: Star, label: "CGPA", value: "7.84 / 10" },
                  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu" },
                  { icon: Mail, label: "Email", value: "sivamah25@gmail.com" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "var(--c-primary-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon size={15} style={{ color: "var(--c-primary)" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.7rem", color: "var(--c-text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: "0.83rem", color: "var(--c-text-1)", fontWeight: 600, lineHeight: 1.4 }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status chip */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(16,185,129,0.1)",
                color: "#059669",
                borderRadius: 99,
                padding: "8px 16px",
                fontSize: "0.78rem",
                fontWeight: 700,
                border: "1px solid rgba(16,185,129,0.2)",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981" }} />
                Open to Internships & Opportunities
              </div>
            </div>
          </motion.div>

          {/* Right — Bio + Interests */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card"
              style={{ padding: 32 }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 16 }}>
                My Story
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "I'm a final-year Computer Science Engineering student at Dr. N.G.P Institute of Technology, Coimbatore, with a CGPA of 7.84. My journey into technology started with a curiosity for how software shapes the world.",
                  "Through internships, projects, and certifications, I've developed expertise in cloud computing (AWS), data science, AI applications, and full-stack web development. I love building things that solve real problems.",
                  "Currently, I'm actively preparing for placements and exploring opportunities in software engineering, cloud engineering, and data science roles at top tech companies. My goal is to build scalable cloud-native architectures and intelligent web applications.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "0.92rem", color: "var(--c-text-2)", lineHeight: 1.75 }}>
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card"
              style={{ padding: 32 }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 20 }}>
                Future Goals
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { title: "Software Engineer", icon: "💻", bg: "var(--c-primary-soft)", color: "var(--c-primary)", border: "rgba(108,99,255,0.2)" },
                  { title: "Cloud Engineer", icon: "☁️", bg: "var(--c-orange-soft)", color: "var(--c-orange)", border: "rgba(255,140,66,0.2)" },
                  { title: "Data Engineer", icon: "⚡", bg: "var(--c-accent-soft)", color: "#0099bb", border: "rgba(0,212,255,0.2)" }
                ].map((goal) => (
                  <div
                    key={goal.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 16px",
                      borderRadius: 14,
                      background: goal.bg,
                      border: `1px solid ${goal.border}`,
                      color: goal.color,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    <span>{goal.icon}</span>
                    <span>{goal.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="glass-card"
              style={{ padding: 32 }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 20 }}>
                Areas of Interest
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      borderRadius: 14,
                      background: "var(--c-surface-2)",
                      border: "1px solid var(--c-border-soft)",
                      cursor: "default",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--c-text-1)", lineHeight: 1.3 }}>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                background: "linear-gradient(135deg, rgba(108,99,255,0.06), rgba(255,107,157,0.04))",
                border: "1px solid rgba(108,99,255,0.12)",
                borderRadius: "var(--radius)",
                padding: 24,
                borderLeft: "4px solid var(--c-primary)",
              }}
            >
              <p style={{
                fontSize: "0.95rem",
                color: "var(--c-text-2)",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}>
                &ldquo;The best engineers aren&apos;t those who know everything — they&apos;re those who know how to find answers and turn them into solutions.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
