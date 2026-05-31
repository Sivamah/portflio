"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Target, MapPin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => { setMounted(true); }, []);

  const isNature = theme === "nature";

  return (
    <section
      id="home"
      className="hero-section"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}
    >
      {/* Theme-specific background blobs */}
      {isNature ? (
        <>
          <div className="blob" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(110,139,96,0.08) 0%, transparent 70%)", top: -100, right: -80 }} />
          <div className="blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(166,124,82,0.06) 0%, transparent 70%)", bottom: -60, left: 40 }} />
          {/* Decorative leaf */}
          <div className="nature-leaf" style={{ top: 80, right: 60, transform: "rotate(15deg)", fontSize: 180 }}>🌿</div>
        </>
      ) : (
        <>
          <div className="blob" style={{ width: 480, height: 480, background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)", top: -80, right: -60 }} />
          <div className="blob" style={{ width: 380, height: 380, background: "radial-gradient(circle, rgba(138,43,226,0.07) 0%, transparent 70%)", bottom: -40, left: 60 }} />
        </>
      )}

      <div className="section" style={{ position: "relative", zIndex: 1, paddingTop: 40, paddingBottom: 40 }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="status-badge"
          style={{ marginBottom: 32, width: "fit-content" }}
        >
          <div className="status-dot-live" />
          <span>{isNature ? "🌱 Open to Opportunities" : "⚡ Available for Opportunities"}</span>
        </motion.div>

        {/* Two-column hero grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
          className="hero-grid-override"
        >
          {/* ── Left: Text Content ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "1.1rem",
                color: "var(--c-text-2)",
                fontWeight: 500,
                marginBottom: 6,
                fontFamily: isNature ? "Lora, Georgia, serif" : "Inter, sans-serif",
                fontStyle: isNature ? "italic" : "normal",
              }}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-hero font-display"
              style={{ marginBottom: 12, lineHeight: 1.05 }}
            >
              <span className="gradient-text">Siva</span>
              <br />
              <span style={{ color: "var(--c-text-1)", fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)", fontWeight: 700 }}>
                Subramanian M
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--c-text-2)",
                marginBottom: 8,
                fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif",
              }}
            >
              {isNature
                ? "Computer Science Engineering Student"
                : "Software Engineer in Progress"}
            </motion.p>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                fontFamily: "Sora, sans-serif",
                marginBottom: 20,
                minHeight: 34,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {mounted && (
                <TypeAnimation
                  sequence={
                    isNature
                      ? ["Java Developer", 2200, "AWS Cloud Enthusiast", 2200, "Backend Engineer", 2200, "Problem Solver", 2200]
                      : ["Final Year CSE Student", 2200, "Backend Engineer", 2200, "Cloud Practitioner", 2200, "Problem Solver", 2200]
                  }
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  style={{
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                />
              )}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "0.98rem",
                color: "var(--c-text-2)",
                lineHeight: 1.78,
                maxWidth: 500,
                marginBottom: 36,
                fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif",
              }}
            >
              {isNature ? (
                <>
                  Building scalable software solutions using{" "}
                  <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Java</strong>,{" "}
                  <strong style={{ color: "var(--c-secondary)", fontWeight: 600 }}>AWS</strong>,{" "}
                  <strong style={{ color: "var(--c-teal)", fontWeight: 600 }}>Cloud Computing</strong>, and{" "}
                  <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Backend Development</strong>.
                </>
              ) : (
                <>
                  Building intelligent software solutions using{" "}
                  <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Java</strong>,{" "}
                  <strong style={{ color: "var(--c-secondary)", fontWeight: 600 }}>Cloud Technologies</strong>,{" "}
                  <strong style={{ color: "var(--c-accent)", fontWeight: 600 }}>Backend Development</strong>, and{" "}
                  <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Problem Solving</strong>.
                </>
              )}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--c-text-3)", fontSize: "0.82rem", marginBottom: 28 }}
            >
              <MapPin size={13} />
              <span>Coimbatore, Tamil Nadu</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                id="hero-explore-btn"
              >
                <ArrowRight size={16} />
                {isNature ? "Explore My Garden" : "Explore My Work"}
              </motion.a>
              <motion.a
                href="/resume.pdf.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
                id="hero-resume-btn"
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}
              className="hero-stats-grid"
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "7.84", label: "CGPA" },
                { value: "AWS", label: "Certified" },
                { value: "NPTEL", label: "Elite" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--c-surface)",
                    border: "1px solid var(--c-border)",
                    borderRadius: isNature ? "16px" : "12px",
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-xs)",
                    textAlign: "center",
                  }}
                >
                  <p style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    fontFamily: "Sora, sans-serif",
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.62rem", color: "var(--c-text-2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}
          >
            {/* Tech orbit rings — only shown in dark theme */}
            <div className="galactic-elements">
              <div className="orbit-ring" style={{ width: 360, height: 360, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderColor: "rgba(0,229,255,0.12)" }} />
              <div className="orbit-ring" style={{ width: 460, height: 460, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", borderColor: "rgba(138,43,226,0.12)" }} />
            </div>

            {/* Profile image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="profile-ring">
                <Image
                  src="/profile.png"
                  alt="Siva Subramanian M"
                  width={260}
                  height={260}
                  className="profile-img"
                  priority
                />
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ position: "absolute", bottom: -20, left: -20, zIndex: 10 }}
            >
              <div style={{
                background: "var(--c-surface)",
                border: "1px solid var(--c-border)",
                borderRadius: "16px",
                padding: "18px 22px",
                boxShadow: "var(--shadow-card)",
                backdropFilter: "blur(20px)",
                maxWidth: "260px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: "var(--c-primary-soft)",
                    border: "1px solid var(--c-border)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Target size={14} color="var(--c-primary)" />
                  </div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--c-primary)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {isNature ? "My Mission" : "Current Mission"}
                  </p>
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--c-text-2)", lineHeight: 1.55, fontStyle: "italic", fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif" }}>
                  {isNature
                    ? `"To grow into a Software Engineer building meaningful, impactful solutions."`
                    : `"To become a skilled Software Engineer and Cloud Engineer building impactful real-world solutions."`}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .hero-grid-override { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}} />
    </section>
  );
}
