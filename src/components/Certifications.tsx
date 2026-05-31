"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const certs = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    icon: "☁️",
    color: "var(--c-orange)",
    bg: "var(--c-orange-soft)",
    border: "rgba(255,140,66,0.2)",
    badge: "🏆 AWS Certified",
    link: "https://aws.amazon.com/verification",
  },
  {
    id: 2,
    title: "NPTEL Elite Certificate",
    issuer: "National Programme on Technology Enhanced Learning",
    year: "2024",
    icon: "🎓",
    color: "var(--c-primary)",
    bg: "var(--c-primary-soft)",
    border: "rgba(108,99,255,0.2)",
    badge: "⭐ Elite Performer",
    link: "https://nptel.ac.in",
  },
  {
    id: 3,
    title: "C++ Programming",
    issuer: "Coursera / NPTEL",
    year: "2023",
    icon: "⚙️",
    color: "var(--c-accent)",
    bg: "var(--c-accent-soft)",
    border: "rgba(0,212,255,0.2)",
    badge: "✅ Certified",
    link: "https://coursera.org",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(certs.length - 1, a + 1));

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
            <span>🏅</span>
            Certifications
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2 className="text-section-title font-display">
              Achievements & <span className="gradient-text">Credentials</span>
            </h2>
            {/* Navigation arrows */}
            <div style={{ display: "flex", gap: 8 }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                disabled={active === 0}
                id="cert-prev-btn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  border: "1.5px solid var(--c-border-soft)",
                  background: "var(--c-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: active === 0 ? "not-allowed" : "pointer",
                  opacity: active === 0 ? 0.4 : 1,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <ChevronLeft size={18} style={{ color: "var(--c-text-2)" }} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                disabled={active === certs.length - 1}
                id="cert-next-btn"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  border: "1.5px solid var(--c-border-soft)",
                  background: "var(--c-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: active === certs.length - 1 ? "not-allowed" : "pointer",
                  opacity: active === certs.length - 1 ? 0.4 : 1,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <ChevronRight size={18} style={{ color: "var(--c-text-2)" }} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="portfolio-grid-3">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="cert-card"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "var(--g-primary)",
                borderRadius: "var(--radius) var(--radius) 0 0",
              }} />

              <div style={{ paddingTop: 12, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  {/* Icon + badge */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: cert.bg,
                      border: `1px solid ${cert.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.75rem",
                    }}>
                      {cert.icon}
                    </div>
                    <div style={{
                      background: cert.bg,
                      border: `1px solid ${cert.border}`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: cert.color,
                    }}>
                      {cert.badge}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--c-text-1)",
                    fontFamily: "Sora, sans-serif",
                    marginBottom: 6,
                    lineHeight: 1.35,
                  }}>
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: "0.8rem", color: "var(--c-text-3)", marginBottom: 6, lineHeight: 1.4 }}>
                    {cert.issuer}
                  </p>

                  <p style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: cert.color,
                    marginBottom: 20,
                  }}>
                    {cert.year}
                  </p>
                </div>

                <a
                  href={cert.link}
                  id={`cert-view-${cert.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <ExternalLink size={13} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 99,
                background: i === active ? "var(--c-primary)" : "var(--c-border-soft)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
