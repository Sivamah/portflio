"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="resume" style={{ background: "var(--c-surface-2)" }}>
      <div ref={ref} className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>📄</span>
            Resume
          </div>
          <h2 className="text-section-title font-display">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 12 }}>
            A full overview of my education, experience, projects, and skills.
          </p>
        </motion.div>

        <div className="resume-grid">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                background: "var(--c-surface)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--c-border)",
                boxShadow: "var(--shadow-card)",
                overflow: "hidden",
                aspectRatio: "8.5 / 11",
                position: "relative",
              }}
            >
              {/* Resume mockup content */}
              <div style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Header */}
                <div style={{
                  background: "var(--g-primary)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  color: "white",
                }}>
                  <p style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>
                    Siva Subramanian M
                  </p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.9, marginTop: 2 }}>
                    B.E Computer Science Engineering
                  </p>
                  <p style={{ fontSize: "0.7rem", opacity: 0.8, marginTop: 1 }}>
                    sivamah25@gmail.com • Coimbatore, Tamil Nadu
                  </p>
                </div>

                {/* Sections skeleton */}
                {[
                  {
                    title: "Education",
                    content: "B.E Computer Science Engineering — Dr. N.G.P Institute of Technology (CGPA: 7.84)"
                  },
                  {
                    title: "Experience",
                    content: "AWS Cloud Intern — App Innovation Technologies"
                  },
                  {
                    title: "Projects",
                    content: "Voice Chess Assistant • Skill Platform • Medicine Expiry System"
                  },
                  {
                    title: "Certifications",
                    content: "AWS Certified • NPTEL Elite • C++ Programming"
                  }
                ].map((section) => (
                  <div key={section.title}>
                    <div style={{
                      height: 2,
                      background: "var(--g-primary)",
                      borderRadius: 99,
                      marginBottom: 10,
                      opacity: 0.3,
                    }} />
                    <p style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--c-primary)",
                      marginBottom: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}>
                      {section.title}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--c-text-2)", fontWeight: 500, lineHeight: 1.4 }}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Overlay with view prompt */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(108,99,255,0.6) 0%, transparent 50%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: 24,
                opacity: 0,
                transition: "opacity 0.3s",
              }}
                className="resume-overlay"
              />
            </div>
          </motion.div>

          {/* Actions & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Sora, sans-serif", color: "var(--c-text-1)", marginBottom: 12 }}>
                Siva Subramanian M
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--c-text-2)", lineHeight: 1.75 }}>
                A comprehensive resume covering my academic journey, AWS internship experience, 3+ projects, technical certifications, and full skill set — formatted for top tech company recruiters.
              </p>
            </div>

            {/* Key highlights */}
            <div style={{
              background: "var(--c-surface)",
              borderRadius: 16,
              padding: 24,
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-card)",
            }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--c-text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Resume Details
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "🎓", label: "B.E CSE — Dr. N.G.P Institute of Technology (CGPA: 7.84)", color: "var(--c-primary)" },
                  { icon: "☁️", label: "AWS Cloud Internship — App Innovation Technologies", color: "var(--c-orange)" },
                  { icon: "🚀", label: "Projects: Voice Chess Assistant, Skill Platform, Medicine Expiry System", color: "var(--c-accent)" },
                  { icon: "🏅", label: "Certifications: AWS, NPTEL Elite, C++ Certification", color: "var(--c-teal)" },
                  { icon: "⚡", label: "Contact: Email, Phone, LinkedIn Profile Links", color: "var(--c-secondary)" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ fontSize: "1.1rem", marginTop: 2 }}>{item.icon}</span>
                    <span style={{ fontSize: "0.84rem", color: "var(--c-text-2)", fontWeight: 500, lineHeight: 1.4 }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a
                href="/resume.pdf.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                id="resume-download-btn"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <Download size={16} />
                Download PDF
              </motion.a>
              <motion.a
                href="/resume.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
                id="resume-view-btn"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <Eye size={16} />
                View Online
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
