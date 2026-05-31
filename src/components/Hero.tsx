"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Target } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="hero-section bg-grid" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Background blobs */}
      <div className="blob" style={{ width: 480, height: 480, background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)", top: -80, right: -60 }} />
      <div className="blob" style={{ width: 380, height: 380, background: "radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)", bottom: -40, left: 60 }} />

      <div className="section" style={{ position: "relative", zIndex: 1, paddingTop: 40, paddingBottom: 40 }}>
        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="status-badge" style={{ marginBottom: 32, width: "fit-content", background: "var(--c-surface)", borderColor: "var(--c-border)", color: "var(--c-text-2)" }}>
          <div className="status-dot-live" />
          <span>Available for Opportunities</span>
        </motion.div>

        {/* Two-column hero grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="hero-grid-override">
          {/* ── Left: Text Content ── */}
          <div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ fontSize: "1.15rem", color: "var(--c-text-2)", fontWeight: 500, marginBottom: 6 }}>
              Hi, I&apos;m
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="text-hero font-display" style={{ marginBottom: 14, lineHeight: 1.05 }}>
              <span className="gradient-text">Siva</span>
              <br />
              <span style={{ color: "var(--c-text-1)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700 }}>
                Subramanian M
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 20, minHeight: 36, display: "flex", alignItems: "center", gap: 8 }}>
              {mounted && (
                <TypeAnimation
                  sequence={["Final Year CSE Student", 2500, "Aspiring Software Engineer", 2500, "AWS Cloud Enthusiast", 2500, "Data Science Explorer", 2500]}
                  wrapper="span" speed={55} repeat={Infinity}
                  style={{ background: "var(--g-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                />
              )}
            </motion.div>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ fontSize: "1rem", color: "var(--c-text-2)", lineHeight: 1.75, maxWidth: 500, marginBottom: 36 }}>
              Building intelligent software solutions using{" "}
              <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Java</strong>,{" "}
              <strong style={{ color: "var(--c-secondary)", fontWeight: 600 }}>Cloud Technologies</strong>,{" "}
              <strong style={{ color: "var(--c-accent)", fontWeight: 600 }}>Backend Development</strong>, and{" "}
              <strong style={{ color: "var(--c-primary)", fontWeight: 600 }}>Problem Solving</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
              <motion.a href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn-primary" id="hero-explore-btn">
                <ArrowRight size={16} /> Explore My Work
              </motion.a>
              <motion.a href="/resume.pdf.pdf" download
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn-secondary" id="hero-resume-btn">
                <Download size={16} /> Download Resume
              </motion.a>
            </motion.div>

            {/* 4 Premium Cards Row */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="hero-stats-grid">
              {[
                { value: "3+", label: "Projects Built" },
                { value: "7.84", label: "CGPA" },
                { value: "AWS", label: "Certified" },
                { value: "NPTEL", label: "Elite" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                  height: "100%"
                }}>
                  <p style={{ fontSize: "1.25rem", fontWeight: 800, fontFamily: "Sora, sans-serif", background: "var(--g-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: 8 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.65rem", color: "var(--c-text-2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Image ── */}
          <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
            
            {/* Galactic Pathfinder Elements */}
            <div className="galactic-elements">
              {/* Orbit rings */}
              <div className="orbit-ring" style={{ width: 360, height: 360, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderColor: "rgba(0,229,255,0.15)" }} />
              <div className="orbit-ring" style={{ width: 460, height: 460, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDirection: "reverse", opacity: 0.55, borderStyle: "solid", borderColor: "rgba(138,43,226,0.15)" }} />
              
              {/* Subtle particle stars (CSS representation) */}
              <div style={{ position: "absolute", inset: -100, background: "radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #fff, rgba(0,0,0,0))", backgroundRepeat: "repeat", backgroundSize: "200px 200px", opacity: 0.4 }} />
            </div>

            {/* Profile Image with gradient ring */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 2 }}>
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

            {/* Mission card redesign */}
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ position: "absolute", bottom: -20, left: -20, zIndex: 10 }}>
              <div style={{
                background: "var(--c-surface)",
                border: "1px solid rgba(0, 229, 255, 0.15)",
                borderRadius: "var(--radius-sm)",
                padding: "20px",
                boxShadow: "0 0 20px rgba(0,229,255,0.1)",
                backdropFilter: "blur(20px)",
                maxWidth: "270px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Target size={15} color="#00E5FF" />
                  </div>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#00E5FF", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    Current Mission
                  </p>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#9EA4AB", lineHeight: 1.55, fontStyle: "italic" }}>
                  &ldquo;To become a skilled Software Engineer and Cloud Engineer building impactful real-world solutions.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .hero-grid-override { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}} />
    </section>
  );
}
