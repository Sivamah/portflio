"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const highlights = [
  "Worked with AWS Core Services: EC2, S3, IAM, VPC",
  "Managed Identity and Access Management (IAM) policies",
  "Performed Resource Monitoring and cloud cost optimization",
  "Designed and deployed Cloud Infrastructure solutions",
  "Gained hands-on experience with serverless architecture",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" style={{ background: "var(--c-bg)" }}>
      <div ref={ref} className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>💼</span>
            Experience
          </div>
          <h2 className="text-section-title font-display">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "var(--c-surface)",
            borderRadius: "var(--radius)",
            padding: 40,
            border: "1px solid var(--c-border)",
            boxShadow: "var(--shadow-card)",
            position: "relative",
            overflow: "hidden",
            maxWidth: 800,
          }}
        >
          {/* Top gradient bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "var(--g-primary)",
          }} />

          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
              {/* Title + Company */}
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "var(--c-orange-soft)",
                  border: "1px solid rgba(255,140,66,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  flexShrink: 0,
                }}>
                  ☁️
                </div>
                <div>
                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "var(--c-text-1)",
                    fontFamily: "Sora, sans-serif",
                    marginBottom: 4,
                  }}>
                    AWS Cloud Intern
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Building2 size={14} style={{ color: "var(--c-text-3)" }} />
                    <span style={{ fontSize: "0.9rem", color: "var(--c-orange)", fontWeight: 600 }}>
                      App Innovation Technologies
                    </span>
                  </div>
                </div>
              </div>

              {/* Date + Status */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--c-orange-soft)",
                  color: "var(--c-orange)",
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}>
                  <Calendar size={13} />
                  April 2025 – May 2025
                </div>
                <span className="tech-tag tag-green" style={{ fontSize: "0.72rem" }}>
                  <span className="status-dot" style={{ background: "#10b981", width: 6, height: 6, borderRadius: "50%", display: "inline-block", marginRight: 4 }} />
                  Completed
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: "0.92rem",
              color: "var(--c-text-2)",
              lineHeight: 1.75,
              marginBottom: 28,
              paddingBottom: 24,
              borderBottom: "1px solid var(--c-border-soft)",
            }}>
              Completed a 2-month cloud computing internship focused on AWS infrastructure. Gained hands-on experience deploying and managing cloud services, implementing security policies, and monitoring cloud resources for a real-world enterprise environment.
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--c-text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Key Achievements
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
              className="portfolio-grid-2"
              >
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
                  >
                    <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.85rem", color: "var(--c-text-2)", lineHeight: 1.5 }}>
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 20, borderTop: "1px solid var(--c-border-soft)" }}>
              {["AWS EC2", "S3 Buckets", "IAM", "VPC", "CloudWatch", "Lambda"].map((tech) => (
                <span key={tech} className="tech-tag tag-orange">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
