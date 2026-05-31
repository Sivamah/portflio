"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, MessageSquare, Target, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

/* ─── Holographic Chess Rook SVG ─── */
function QuantumRook() {
  return (
    <div className="qr-rook-container">
      {/* Orbital rings */}
      <div className="qr-orbit-1" />
      <div className="qr-orbit-2" />
      <div className="qr-orbit-3" />

      {/* Platform glow */}
      <div className="qr-platform" />

      {/* Particles */}
      {[
        { x: -80, y: -120, delay: "0s" },
        { x: 90, y: -100, delay: "1.5s" },
        { x: -60, y: 40, delay: "0.8s" },
        { x: 110, y: 20, delay: "2.2s" },
        { x: -30, y: -160, delay: "3s" },
        { x: 60, y: -150, delay: "1s" },
      ].map((p, i) => (
        <div
          key={i}
          className="qr-particle"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            animationDelay: p.delay,
            background: i % 2 === 0
              ? "rgba(59,130,246,0.8)"
              : "rgba(139,92,246,0.7)",
            width: i % 3 === 0 ? "4px" : "2px",
            height: i % 3 === 0 ? "4px" : "2px",
          } as React.CSSProperties}
        />
      ))}

      {/* The rook SVG */}
      <div className="qr-rook" style={{ zIndex: 2 }}>
        <svg
          width="200"
          height="260"
          viewBox="0 0 200 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rookBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="rookEdge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="rookGlow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="innerGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* ── Base platform ── */}
          <ellipse cx="100" cy="248" rx="72" ry="10"
            fill="url(#rookEdge)" opacity="0.3" filter="url(#innerGlow)" />
          <rect x="30" y="232" width="140" height="18" rx="4"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1" />
          <rect x="38" y="234" width="124" height="14" rx="3"
            fill="url(#rookGlow)" opacity="0.4" />

          {/* ── Stem ── */}
          <rect x="52" y="160" width="96" height="72" rx="4"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" />
          {/* Stem sheen */}
          <rect x="56" y="164" width="30" height="64" rx="2"
            fill="rgba(255,255,255,0.04)" />
          {/* Stem horizontal lines (circuit detail) */}
          {[178, 194, 210, 220].map((y, i) => (
            <line key={i} x1="58" y1={y} x2="142" y2={y}
              stroke="url(#rookEdge)" strokeWidth="0.5" strokeOpacity="0.4"
              strokeDasharray={i % 2 === 0 ? "8 4" : "4 8"} />
          ))}

          {/* ── Body ── */}
          <rect x="40" y="90" width="120" height="70" rx="5"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" />
          {/* Body glass sheen */}
          <rect x="44" y="94" width="40" height="62" rx="3"
            fill="rgba(255,255,255,0.05)" />
          {/* Energy core circle */}
          <circle cx="100" cy="126" r="18"
            fill="url(#rookGlow)" stroke="url(#rookEdge)" strokeWidth="1" filter="url(#glow)" />
          <circle cx="100" cy="126" r="10"
            fill="rgba(139,92,246,0.5)" filter="url(#innerGlow)" />
          <circle cx="100" cy="126" r="4"
            fill="#00E5FF" filter="url(#glow)" />

          {/* Body circuit lines */}
          <line x1="46" y1="110" x2="80" y2="110" stroke="url(#rookEdge)" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="120" y1="110" x2="154" y2="110" stroke="url(#rookEdge)" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="46" y1="142" x2="80" y2="142" stroke="url(#rookEdge)" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="120" y1="142" x2="154" y2="142" stroke="url(#rookEdge)" strokeWidth="0.8" strokeOpacity="0.5" />

          {/* ── Crown battlements ── */}
          {/* Left battlement */}
          <rect x="30" y="30" width="28" height="60" rx="4"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" filter="url(#glow)" />
          <rect x="34" y="34" width="10" height="52" rx="2"
            fill="rgba(255,255,255,0.04)" />

          {/* Center battlement (taller) */}
          <rect x="72" y="10" width="56" height="80" rx="5"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="2" filter="url(#glow)" />
          {/* Center energy core */}
          <rect x="80" y="20" width="40" height="60" rx="3"
            fill="url(#rookGlow)" opacity="0.3" />
          <rect x="84" y="24" width="32" height="52" rx="2"
            fill="rgba(255,255,255,0.04)" />
          {/* Top center detail */}
          <rect x="88" y="16" width="24" height="6" rx="2"
            fill="url(#rookEdge)" opacity="0.8" />
          <circle cx="100" cy="50" r="8"
            fill="rgba(59,130,246,0.4)" stroke="#3B82F6" strokeWidth="1" filter="url(#glow)" />
          <circle cx="100" cy="50" r="3"
            fill="#00E5FF" filter="url(#glow)" />

          {/* Right battlement */}
          <rect x="142" y="30" width="28" height="60" rx="4"
            fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" filter="url(#glow)" />
          <rect x="146" y="34" width="10" height="52" rx="2"
            fill="rgba(255,255,255,0.04)" />

          {/* ── Crown top connectors ── */}
          <rect x="58" y="88" width="14" height="6" rx="2"
            fill="url(#rookEdge)" opacity="0.6" />
          <rect x="128" y="88" width="14" height="6" rx="2"
            fill="url(#rookEdge)" opacity="0.6" />

          {/* ── Scanning line animation ── */}
          <rect x="40" y="90" width="120" height="2" rx="1"
            fill="url(#rookEdge)" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 68"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="ease-in-out"
            />
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" />
          </rect>

          {/* ── Corner accents ── */}
          {[[40,90],[152,90],[40,158],[152,158]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="3"
              fill="#00E5FF" filter="url(#glow)" opacity="0.9" />
          ))}
          {[[30,30],[58,30],[30,88],[58,88]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2"
              fill="#3B82F6" filter="url(#glow)" opacity="0.8" />
          ))}
          {[[142,30],[170,30],[142,88],[170,88]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2"
              fill="#3B82F6" filter="url(#glow)" opacity="0.8" />
          ))}
        </svg>
      </div>

      {/* Scan line overlay */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "260px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 3,
      }}>
        <div className="qr-scanline" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => { setMounted(true); }, []);
  const isNature = theme === "nature";

  return (
    <section id="home" className="hero-section">
      {/* Nature blobs */}
      {isNature ? (
        <>
          <div className="blob" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(110,139,96,0.08) 0%, transparent 70%)", top: -100, right: -80 }} />
          <div className="blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(166,124,82,0.06) 0%, transparent 70%)", bottom: -60, left: 40 }} />
          <div className="nature-leaf" style={{ top: 80, right: 60, transform: "rotate(15deg)", fontSize: 180 }}>🌿</div>
        </>
      ) : (
        <>
          {/* Quantum blobs */}
          <div className="blob" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", top: -100, right: -80, filter: "blur(60px)" }} />
          <div className="blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", bottom: 0, left: 60, filter: "blur(60px)" }} />
          <div className="blob" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)", top: "30%", left: "20%", filter: "blur(40px)" }} />
        </>
      )}

      <div className="section" style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 40, width: "100%" }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36, width: "fit-content" }}
        >
          {isNature ? (
            <div className="status-badge">
              <div className="status-dot-live" />
              <span>🌱 Open to Opportunities</span>
            </div>
          ) : (
            <div className="status-badge">
              <div className="status-dot-live" />
              <span>SYSTEM ONLINE // AVAILABLE FOR HIRE</span>
            </div>
          )}
        </motion.div>

        {/* Two-column hero grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "64px", alignItems: "center" }} className="hero-grid-override">

          {/* ── Left: Text Content ── */}
          <div style={{ maxWidth: 600 }}>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: 8 }}
            >
              {isNature ? (
                <p style={{ fontSize: "1.05rem", color: "var(--c-text-2)", fontWeight: 500, fontFamily: "Lora, serif", fontStyle: "italic" }}>
                  Hi, I&apos;m
                </p>
              ) : (
                <p style={{ fontFamily: "Orbitron, monospace", fontSize: "0.7rem", color: "var(--c-accent)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}>
                  &gt; HELLO, I&apos;M
                </p>
              )}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-hero font-display"
              style={{ marginBottom: 12, lineHeight: 1.05 }}
            >
              <span className="gradient-text">Siva</span>
              <br />
              <span style={{ color: "var(--c-text-1)", fontSize: isNature ? "clamp(1.6rem, 3vw, 2.8rem)" : "clamp(1.3rem, 2.5vw, 2.2rem)", fontWeight: isNature ? 700 : 600 }}>
                Subramanian M
              </span>
            </motion.h1>

            {/* Subtitle */}
            {!isNature && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.16 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 12px",
                  borderRadius: 6,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  marginBottom: 16,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 8px #3B82F6", display: "inline-block" }} />
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", color: "#94A3B8" }}>
                  COMPUTER SCIENCE ENGINEERING STUDENT
                </span>
              </motion.div>
            )}
            {isNature && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
                style={{ fontSize: "1rem", fontWeight: 600, color: "var(--c-text-2)", marginBottom: 8, fontFamily: "Lora, serif" }}>
                Computer Science Engineering Student
              </motion.p>
            )}

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              style={{ marginBottom: 20, minHeight: 36, display: "flex", alignItems: "center" }}
            >
              {mounted && (
                <TypeAnimation
                  sequence={
                    isNature
                      ? ["Java Developer", 2200, "AWS Cloud Enthusiast", 2200, "Backend Engineer", 2200, "Problem Solver", 2200]
                      : ["Backend Engineer", 2200, "Cloud Architect", 2200, "Java Developer", 2200, "System Designer", 2200]
                  }
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  style={{
                    fontSize: isNature ? "1.1rem" : "1rem",
                    fontWeight: 700,
                    fontFamily: isNature ? "Sora, sans-serif" : "Space Grotesk, sans-serif",
                    letterSpacing: isNature ? "0" : "0.06em",
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textTransform: isNature ? "none" : "uppercase",
                  }}
                />
              )}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              style={{
                fontSize: isNature ? "0.98rem" : "0.88rem",
                color: "var(--c-text-2)",
                lineHeight: 1.78,
                maxWidth: 500,
                marginBottom: 32,
                fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif",
                fontStyle: isNature ? "italic" : "normal",
              }}
            >
              {isNature ? (
                <>Building scalable software solutions using{" "}
                  <strong style={{ color: "var(--c-primary)", fontStyle: "normal" }}>Java</strong>,{" "}
                  <strong style={{ color: "var(--c-secondary)", fontStyle: "normal" }}>AWS</strong>,{" "}
                  <strong style={{ color: "var(--c-teal)", fontStyle: "normal" }}>Cloud Computing</strong>, and{" "}
                  <strong style={{ color: "var(--c-primary)", fontStyle: "normal" }}>Backend Development</strong>.
                </>
              ) : (
                <>Building scalable software solutions using{" "}
                  <span style={{ color: "#3B82F6", fontWeight: 600 }}>Java</span>,{" "}
                  <span style={{ color: "#8B5CF6", fontWeight: 600 }}>AWS</span>,{" "}
                  <span style={{ color: "#00E5FF", fontWeight: 600 }}>Backend Development</span> and{" "}
                  <span style={{ color: "#3B82F6", fontWeight: 600 }}>Cloud Technologies</span>.
                </>
              )}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--c-text-3)", fontSize: "0.8rem", marginBottom: 32 }}
            >
              <MapPin size={12} />
              <span style={{ fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif", letterSpacing: isNature ? "0" : "0.04em" }}>
                {isNature ? "Coimbatore, Tamil Nadu" : "COIMBATORE, TAMIL NADU"}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}
            >
              {isNature ? (
                <>
                  <motion.a href="#projects" onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary" id="hero-explore-btn">
                    <ArrowRight size={16} /> Explore My Garden
                  </motion.a>
                  <motion.a href="/resume.pdf.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary" id="hero-resume-btn">
                    <Download size={16} /> Download Resume
                  </motion.a>
                </>
              ) : (
                <>
                  <motion.a href="#projects" onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-primary" id="hero-explore-btn">
                    <ChevronRight size={15} /> Explore My Work
                  </motion.a>
                  <motion.a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-secondary" id="hero-contact-btn">
                    <MessageSquare size={14} /> Get In Touch
                  </motion.a>
                  <motion.a href="/resume.pdf.pdf" download whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-ghost" id="hero-resume-btn">
                    <Download size={14} /> Resume
                  </motion.a>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
              className="hero-stats-grid"
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "7.84", label: "CGPA" },
                { value: "AWS", label: "Certified" },
                { value: "NPTEL", label: "Elite" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: isNature ? "16px" : "8px",
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-xs)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {!isNature && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
                  )}
                  <p style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    fontFamily: isNature ? "Sora, sans-serif" : "Orbitron, monospace",
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.6rem", color: "var(--c-text-2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual Element ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {isNature ? (
              /* Nature: profile photo */
              <div style={{ position: "relative" }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative", zIndex: 2 }}>
                  <div className="profile-ring">
                    <Image src="/profile.png" alt="Siva Subramanian M" width={260} height={260} className="profile-img" priority />
                  </div>
                </motion.div>
                {/* Mission card */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ position: "absolute", bottom: -20, left: -20, zIndex: 10 }}
                >
                  <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "16px", padding: "16px 20px", boxShadow: "var(--shadow-card)", backdropFilter: "blur(20px)", maxWidth: "240px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 26, height: 26, borderRadius: 8, background: "var(--c-primary-soft)", border: "1px solid var(--c-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Target size={13} color="var(--c-primary)" />
                      </div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--c-primary)", textTransform: "uppercase", letterSpacing: "0.07em" }}>My Mission</p>
                    </div>
                    <p style={{ fontSize: "0.76rem", color: "var(--c-text-2)", lineHeight: 1.55, fontStyle: "italic", fontFamily: "Lora, serif" }}>
                      &ldquo;To grow into a Software Engineer building meaningful solutions.&rdquo;
                    </p>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Quantum Rook: holographic chess rook + profile */
              <div style={{ position: "relative" }}>
                {/* Quantum Rook 3D */}
                <QuantumRook />

                {/* Profile photo floating card below rook */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{ position: "absolute", bottom: -30, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
                >
                  <div style={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "14px",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    boxShadow: "0 0 30px rgba(59,130,246,0.1), 0 8px 32px rgba(0,0,0,0.6)",
                    backdropFilter: "blur(20px)",
                    minWidth: "220px",
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #00E5FF, #3B82F6)", padding: "2px", flexShrink: 0 }}>
                      <Image src="/profile.png" alt="Siva" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "2px solid #0F172A" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "white", marginBottom: 2 }}>Siva Subramanian</p>
                      <p style={{ fontFamily: "Orbitron, monospace", fontSize: "0.58rem", color: "#3B82F6", letterSpacing: "0.1em" }}>SOFTWARE ENGINEER</p>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E", animation: "pulse-dot 2s infinite" }} />
                    </div>
                  </div>
                </motion.div>

                {/* Quantum Rook badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  style={{ position: "absolute", top: -20, right: -40, zIndex: 20 }}
                >
                  <div className="holo-badge" style={{ borderRadius: "10px", padding: "10px 14px" }}>
                    <p style={{ fontFamily: "Orbitron, monospace", fontSize: "0.65rem", fontWeight: 700, color: "#00E5FF", letterSpacing: "0.12em", marginBottom: 2 }}>
                      ♟️ QUANTUM ROOK
                    </p>
                    <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.6rem", color: "#94A3B8", letterSpacing: "0.06em" }}>
                      Where Strategy Meets Technology
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1100px) {
          .hero-grid-override { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}} />
    </section>
  );
}
