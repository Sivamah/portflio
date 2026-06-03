"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, MessageSquare, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

/* ─── Architectural Glass Chess Rook ─── */
function ArchitecturalRook() {
  return (
    <div className="arch-rook-container">
      <div className="arch-rook" style={{ zIndex: 2 }}>
        <svg width="220" height="290" viewBox="0 0 220 290" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="archBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#163A63" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#2F5D8A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#4A7CA8" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="archEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#163A63" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4A7CA8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="archSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.12" />
              <stop offset="100%" stopColor="white" stopOpacity="0.02" />
            </linearGradient>
            <filter id="archShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#163A63" floodOpacity="0.12"/>
            </filter>
          </defs>

          {/* ── Base ── */}
          <rect x="25" y="262" width="170" height="20" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1" filter="url(#archShadow)" />
          <rect x="30" y="264" width="60" height="16" rx="1"
            fill="url(#archSheen)" />

          {/* ── Stem ── */}
          <rect x="45" y="180" width="130" height="82" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1" />
          <rect x="49" y="184" width="38" height="74" rx="1"
            fill="url(#archSheen)" />
          {/* Horizontal detail lines */}
          <line x1="51" y1="204" x2="169" y2="204" stroke="url(#archEdge)" strokeWidth="0.5" />
          <line x1="51" y1="224" x2="169" y2="224" stroke="url(#archEdge)" strokeWidth="0.5" />
          <line x1="51" y1="244" x2="169" y2="244" stroke="url(#archEdge)" strokeWidth="0.5" />

          {/* ── Body ── */}
          <rect x="35" y="100" width="150" height="80" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1.5" filter="url(#archShadow)" />
          <rect x="39" y="104" width="48" height="72" rx="1"
            fill="url(#archSheen)" />
          {/* Body center detail */}
          <rect x="80" y="114" width="60" height="52" rx="1"
            fill="rgba(22,58,99,0.04)" stroke="url(#archEdge)" strokeWidth="0.8" />
          {/* Subtle centerline cross */}
          <line x1="110" y1="116" x2="110" y2="164" stroke="url(#archEdge)" strokeWidth="0.6" />
          <line x1="82" y1="140" x2="138" y2="140" stroke="url(#archEdge)" strokeWidth="0.6" />

          {/* ── Left Crown Battlement ── */}
          <rect x="25" y="28" width="40" height="72" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1.2" filter="url(#archShadow)" />
          <rect x="29" y="32" width="14" height="64" rx="1" fill="url(#archSheen)" />
          {/* Battlements notch top */}
          <rect x="25" y="18" width="40" height="12" rx="1"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1" />

          {/* ── Center Crown Battlement (tallest) ── */}
          <rect x="80" y="8" width="60" height="92" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1.5" filter="url(#archShadow)" />
          <rect x="84" y="12" width="20" height="84" rx="1" fill="url(#archSheen)" />
          {/* Center notch */}
          <rect x="80" y="0" width="60" height="12" rx="1"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1" />
          {/* Center dot accent */}
          <circle cx="110" cy="54" r="6"
            fill="rgba(22,58,99,0.06)" stroke="url(#archEdge)" strokeWidth="1" />
          <circle cx="110" cy="54" r="2"
            fill="rgba(22,58,99,0.25)" />

          {/* ── Right Crown Battlement ── */}
          <rect x="155" y="28" width="40" height="72" rx="2"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1.2" filter="url(#archShadow)" />
          <rect x="159" y="32" width="14" height="64" rx="1" fill="url(#archSheen)" />
          <rect x="155" y="18" width="40" height="12" rx="1"
            fill="url(#archBody)" stroke="url(#archEdge)" strokeWidth="1" />

          {/* ── Crown connectors ── */}
          <rect x="65" y="98" width="15" height="4" rx="1"
            fill="url(#archEdge)" opacity="0.4" />
          <rect x="140" y="98" width="15" height="4" rx="1"
            fill="url(#archEdge)" opacity="0.4" />

          {/* ── Ground shadow ── */}
          <ellipse cx="110" cy="280" rx="80" ry="5"
            fill="rgba(22,58,99,0.06)" />

          {/* ── Corner accent dots ── */}
          {[[35,100],[185,100],[35,180],[185,180]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2.5"
              fill="#2F5D8A" opacity="0.35" />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ─── Quantum Rook ─── */
function QuantumRook() {
  return (
    <div className="qr-rook-container">
      <div className="qr-orbit-1" />
      <div className="qr-orbit-2" />
      <div className="qr-orbit-3" />
      <div className="qr-platform" />
      {[
        { x: -80, y: -120, delay: "0s" },
        { x: 90, y: -100, delay: "1.5s" },
        { x: -60, y: 40, delay: "0.8s" },
        { x: 110, y: 20, delay: "2.2s" },
        { x: -30, y: -160, delay: "3s" },
        { x: 60, y: -150, delay: "1s" },
      ].map((p, i) => (
        <div key={i} className="qr-particle"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            animationDelay: p.delay,
            background: i % 2 === 0 ? "rgba(59,130,246,0.8)" : "rgba(139,92,246,0.7)",
            width: i % 3 === 0 ? "4px" : "2px",
            height: i % 3 === 0 ? "4px" : "2px",
          } as React.CSSProperties}
        />
      ))}
      <div className="qr-rook" style={{ zIndex: 2 }}>
        <svg width="200" height="260" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <filter id="innerGlow"><feGaussianBlur stdDeviation="6" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <ellipse cx="100" cy="248" rx="72" ry="10" fill="url(#rookEdge)" opacity="0.3" filter="url(#innerGlow)" />
          <rect x="30" y="232" width="140" height="18" rx="4" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1" />
          <rect x="52" y="160" width="96" height="72" rx="4" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" />
          <rect x="40" y="90" width="120" height="70" rx="5" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" />
          <circle cx="100" cy="126" r="18" fill="url(#rookGlow)" stroke="url(#rookEdge)" strokeWidth="1" filter="url(#glow)" />
          <circle cx="100" cy="126" r="10" fill="rgba(139,92,246,0.5)" filter="url(#innerGlow)" />
          <circle cx="100" cy="126" r="4" fill="#00E5FF" filter="url(#glow)" />
          <rect x="30" y="30" width="28" height="60" rx="4" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" filter="url(#glow)" />
          <rect x="72" y="10" width="56" height="80" rx="5" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="2" filter="url(#glow)" />
          <circle cx="100" cy="50" r="8" fill="rgba(59,130,246,0.4)" stroke="#3B82F6" strokeWidth="1" filter="url(#glow)" />
          <circle cx="100" cy="50" r="3" fill="#00E5FF" filter="url(#glow)" />
          <rect x="142" y="30" width="28" height="60" rx="4" fill="url(#rookBody)" stroke="url(#rookEdge)" strokeWidth="1.5" filter="url(#glow)" />
          {[[40,90],[152,90],[40,158],[152,158]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#00E5FF" filter="url(#glow)" opacity="0.9" />
          ))}
        </svg>
      </div>
      <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"200px",height:"260px",overflow:"hidden",pointerEvents:"none",zIndex:3 }}>
        <div className="qr-scanline" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => { setMounted(true); }, []);
  const isNomad = theme === "nomad";

  return (
    <section id="home" className="hero-section">
      {/* Nomad: floating micro-shapes */}
      {isNomad && (
        <>
          <div style={{ position:"absolute", top:80, right:200, width:3, height:60, background:"rgba(22,58,99,0.08)", transform:"rotate(15deg)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:160, right:160, width:3, height:40, background:"rgba(22,58,99,0.06)", transform:"rotate(-8deg)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:120, left:80, width:40, height:2, background:"rgba(22,58,99,0.07)", pointerEvents:"none" }} />
        </>
      )}

      {/* Quantum blobs */}
      {!isNomad && (
        <>
          <div style={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", top:-100, right:-80, filter:"blur(60px)", borderRadius:"50%", pointerEvents:"none" }} />
          <div style={{ position:"absolute", width:400, height:400, background:"radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", bottom:0, left:60, filter:"blur(60px)", borderRadius:"50%", pointerEvents:"none" }} />
        </>
      )}

      <div className="section" style={{ position:"relative", zIndex:2, paddingTop:40, paddingBottom:40, width:"100%" }}>

        {/* Status badge */}
        <motion.div initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} style={{ marginBottom:36 }}>
          <div className="status-badge">
            <div className="status-dot-live" />
            {isNomad ? "Open to Opportunities" : "SYSTEM ONLINE // AVAILABLE FOR HIRE"}
          </div>
        </motion.div>

        {/* Two-column grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"72px", alignItems:"center" }} className="hero-grid-override">

          {/* ── Left: Text ── */}
          <div style={{ maxWidth:580 }}>

            {/* Greeting */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }} style={{ marginBottom:8 }}>
              {isNomad ? (
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <div style={{ width:28, height:1, background:"var(--c-secondary)", opacity:0.4 }} />
                  <p style={{ fontSize:"0.72rem", fontWeight:700, color:"var(--c-secondary)", letterSpacing:"0.18em", textTransform:"uppercase", fontFamily:"DM Sans, sans-serif" }}>
                    Portfolio
                  </p>
                </div>
              ) : (
                <p style={{ fontFamily:"Orbitron, monospace", fontSize:"0.68rem", color:"#00E5FF", letterSpacing:"0.28em", textTransform:"uppercase", fontWeight:600, marginBottom:4 }}>
                  &gt; HELLO, I&apos;M
                </p>
              )}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}
              className="text-hero font-display"
              style={{ marginBottom:14, lineHeight:1.06 }}
            >
              {isNomad ? (
                <>
                  <span style={{ display:"block", fontSize:"clamp(1rem,2vw,1.25rem)", fontWeight:400, color:"var(--c-text-2)", fontFamily:"DM Sans, sans-serif", letterSpacing:"0", fontStyle:"normal", marginBottom:4 }}>
                    Hi, I&apos;m
                  </span>
                  <span className="gradient-text">Siva</span>{" "}
                  <span style={{ color:"var(--c-text-1)" }}>Subramanian M</span>
                </>
              ) : (
                <>
                  <span className="gradient-text">Siva</span>
                  <br />
                  <span style={{ color:"#FFFFFF", fontSize:"clamp(1.4rem,2.5vw,2.4rem)", fontWeight:600 }}>Subramanian M</span>
                </>
              )}
            </motion.h1>

            {/* Role label */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.18 }} style={{ marginBottom:16 }}>
              {isNomad ? (
                <p style={{ fontSize:"1rem", fontWeight:600, color:"var(--c-text-2)", fontFamily:"DM Sans, sans-serif", letterSpacing:"0.01em" }}>
                  Computer Science Engineering Student
                </p>
              ) : (
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"5px 12px", borderRadius:6, background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)", marginBottom:4 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#3B82F6", boxShadow:"0 0 8px #3B82F6", display:"inline-block" }} />
                  <span style={{ fontFamily:"Space Grotesk, sans-serif", fontSize:"0.73rem", fontWeight:600, letterSpacing:"0.08em", color:"#94A3B8" }}>COMPUTER SCIENCE ENGINEERING STUDENT</span>
                </div>
              )}
            </motion.div>

            {/* Typing role */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.22 }}
              style={{ marginBottom:20, minHeight:34, display:"flex", alignItems:"center" }}>
              {mounted && (
                <TypeAnimation
                  sequence={isNomad
                    ? ["Backend Engineer", 2200, "Java Developer", 2200, "Cloud Practitioner", 2200, "Problem Solver", 2200]
                    : ["Backend Engineer", 2200, "Cloud Architect", 2200, "Java Developer", 2200, "System Designer", 2200]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  style={{
                    fontSize: isNomad ? "1rem" : "0.95rem",
                    fontWeight: 700,
                    fontFamily: isNomad ? "Playfair Display, serif" : "Space Grotesk, sans-serif",
                    fontStyle: isNomad ? "italic" : "normal",
                    letterSpacing: isNomad ? "0.01em" : "0.06em",
                    background: "var(--g-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textTransform: isNomad ? "none" : "uppercase",
                  }}
                />
              )}
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.28 }}
              style={{ fontSize:isNomad?"0.97rem":"0.87rem", color:"var(--c-text-2)", lineHeight:1.8, maxWidth:500, marginBottom:32, fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>
              {isNomad ? (
                <>Building scalable software solutions using{" "}
                  <strong style={{ color:"var(--c-primary)", fontWeight:600 }}>Java</strong>,{" "}
                  <strong style={{ color:"var(--c-secondary)", fontWeight:600 }}>AWS</strong>,{" "}
                  <strong style={{ color:"var(--c-accent)", fontWeight:600 }}>Backend Development</strong>,{" "}
                  <strong style={{ color:"var(--c-secondary)", fontWeight:600 }}>Cloud Technologies</strong>, and{" "}
                  <strong style={{ color:"var(--c-primary)", fontWeight:600 }}>Problem Solving</strong>.
                </>
              ) : (
                <>Building scalable software solutions using{" "}
                  <span style={{ color:"#3B82F6", fontWeight:600 }}>Java</span>,{" "}
                  <span style={{ color:"#8B5CF6", fontWeight:600 }}>AWS</span>,{" "}
                  <span style={{ color:"#00E5FF", fontWeight:600 }}>Backend Development</span> and{" "}
                  <span style={{ color:"#3B82F6", fontWeight:600 }}>Cloud Technologies</span>.
                </>
              )}
            </motion.p>

            {/* Location */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}
              style={{ display:"flex", alignItems:"center", gap:5, color:"var(--c-text-3)", fontSize:"0.78rem", marginBottom:32, fontFamily:"DM Sans, sans-serif" }}>
              <MapPin size={12} />
              <span>Coimbatore, Tamil Nadu</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.36 }}
              style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:48 }}>
              {isNomad ? (
                <>
                  <motion.a href="#projects" onClick={e=>{e.preventDefault();document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}}
                    whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }} className="btn-primary" id="hero-explore-btn">
                    <ArrowRight size={15} /> Explore My Work
                  </motion.a>
                  <motion.a href="#contact" onClick={e=>{e.preventDefault();document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}}
                    whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }} className="btn-secondary" id="hero-contact-btn">
                    <MessageSquare size={14} /> Get In Touch
                  </motion.a>
                  <motion.a href="/resume.pdf.pdf" download
                    whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }} className="btn-secondary" id="hero-resume-btn"
                    style={{ borderColor:"var(--c-border)", color:"var(--c-text-2)" }}>
                    <Download size={14} /> Resume
                  </motion.a>
                </>
              ) : (
                <>
                  <motion.a href="#projects" onClick={e=>{e.preventDefault();document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}}
                    whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn-primary" id="hero-explore-btn">
                    <ChevronRight size={15} /> Explore My Work
                  </motion.a>
                  <motion.a href="#contact" onClick={e=>{e.preventDefault();document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}}
                    whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn-secondary" id="hero-contact-btn">
                    <MessageSquare size={14} /> Get In Touch
                  </motion.a>
                  <motion.a href="/resume.pdf.pdf" download
                    whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn-ghost" id="hero-resume-btn">
                    <Download size={14} /> Resume
                  </motion.a>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.44 }}
              style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }} className="hero-stats-grid">
              {[
                { value:"3+", label:"Projects" },
                { value:"7.84", label:"CGPA" },
                { value:"AWS", label:"Certified" },
                { value:"NPTEL", label:"Elite" },
              ].map((s) => (
                <div key={s.label} style={{
                  background:"var(--c-surface)", border:"1px solid var(--c-border)", borderRadius:isNomad?"12px":"8px",
                  padding:"14px 10px", display:"flex", flexDirection:"column", alignItems:"center",
                  boxShadow:"var(--shadow-xs)", textAlign:"center", position:"relative", overflow:"hidden",
                }}>
                  {!isNomad && <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,#3B82F6,#8B5CF6)" }} />}
                  {isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"var(--g-primary)", opacity:0.3 }} />}
                  <p style={{ fontSize:"1.05rem", fontWeight:800, fontFamily:isNomad?"Playfair Display, serif":"Orbitron, monospace",
                    background:"var(--g-primary)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                    lineHeight:1, marginBottom:6 }}>{s.value}</p>
                  <p style={{ fontSize:"0.6rem", color:"var(--c-text-2)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em",
                    fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity:0, scale:0.85, x:40 }} animate={{ opacity:1, scale:1, x:0 }}
            transition={{ duration:0.75, delay:0.2 }}
            style={{ position:"relative", display:"flex", justifyContent:"center", alignItems:"center" }}
          >
            {isNomad ? (
              /* Nomad: Architectural rook + profile card */
              <div style={{ position:"relative" }}>
                <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}>
                  <ArchitecturalRook />
                </motion.div>
                {/* Profile card (Nomad) */}
                <motion.div animate={{ y:[0,-7,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:0.8 }}
                  style={{ position:"absolute", bottom:-28, left:"50%", transform:"translateX(-50%)", zIndex:20 }}>
                  <div style={{
                    background:"var(--c-surface)", border:"1px solid var(--c-border)", borderRadius:12,
                    padding:"14px 18px", display:"flex", alignItems:"center", gap:12,
                    boxShadow:"var(--shadow-card)", minWidth:230,
                  }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#163A63,#4A7CA8)", padding:"2px", flexShrink:0 }}>
                      <Image src="/profile.png" alt="Siva" width={40} height={40}
                        style={{ borderRadius:"50%", objectFit:"cover", objectPosition:"center top", border:"2px solid white" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily:"DM Sans, sans-serif", fontSize:"0.82rem", fontWeight:700, color:"var(--c-text-1)", marginBottom:2 }}>Siva Subramanian</p>
                      <p style={{ fontFamily:"DM Sans, sans-serif", fontSize:"0.68rem", color:"var(--c-text-3)", letterSpacing:"0.04em", textTransform:"uppercase" }}>Software Engineer</p>
                    </div>
                    <div style={{ marginLeft:"auto" }}>
                      <div className="status-dot-live" />
                    </div>
                  </div>
                </motion.div>
                {/* Architect badge */}
                <motion.div animate={{ y:[0,-5,0] }} transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut", delay:1.2 }}
                  style={{ position:"absolute", top:-18, right:-50, zIndex:20 }}>
                  <div style={{ background:"var(--c-surface)", border:"1px solid var(--c-border)", borderRadius:8, padding:"10px 14px", boxShadow:"var(--shadow-sm)" }}>
                    <p style={{ fontFamily:"DM Sans, sans-serif", fontSize:"0.68rem", fontWeight:700, color:"var(--c-primary)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:2 }}>🏛️ The Nomad&apos;s Board</p>
                    <p style={{ fontFamily:"Playfair Display, serif", fontSize:"0.65rem", color:"var(--c-text-2)", fontStyle:"italic" }}>Where Strategy Meets Technology</p>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Quantum Rook */
              <div style={{ position:"relative" }}>
                <QuantumRook />
                <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:0.5 }}
                  style={{ position:"absolute", bottom:-30, left:"50%", transform:"translateX(-50%)", zIndex:20 }}>
                  <div style={{ background:"rgba(15,23,42,0.95)", border:"1px solid rgba(59,130,246,0.25)", borderRadius:14, padding:"14px 18px", display:"flex", alignItems:"center", gap:14, boxShadow:"0 0 30px rgba(59,130,246,0.1)", backdropFilter:"blur(20px)", minWidth:220 }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:"conic-gradient(from 0deg,#3B82F6,#8B5CF6,#00E5FF,#3B82F6)", padding:"2px", flexShrink:0 }}>
                      <Image src="/profile.png" alt="Siva" width={40} height={40} style={{ borderRadius:"50%", objectFit:"cover", objectPosition:"center top", border:"2px solid #0F172A" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily:"Space Grotesk, sans-serif", fontSize:"0.78rem", fontWeight:700, color:"white", marginBottom:2 }}>Siva Subramanian</p>
                      <p style={{ fontFamily:"Orbitron, monospace", fontSize:"0.55rem", color:"#3B82F6", letterSpacing:"0.12em" }}>SOFTWARE ENGINEER</p>
                    </div>
                    <div style={{ marginLeft:"auto" }}><div className="status-dot-live" /></div>
                  </div>
                </motion.div>
                <motion.div animate={{ y:[0,-6,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:1.5 }}
                  style={{ position:"absolute", top:-20, right:-40, zIndex:20 }}>
                  <div className="holo-badge" style={{ borderRadius:10, padding:"10px 14px" }}>
                    <p style={{ fontFamily:"Orbitron, monospace", fontSize:"0.62rem", fontWeight:700, color:"#00E5FF", letterSpacing:"0.12em", marginBottom:2 }}>♟️ QUANTUM ROOK</p>
                    <p style={{ fontFamily:"Space Grotesk, sans-serif", fontSize:"0.58rem", color:"#94A3B8", letterSpacing:"0.06em" }}>Where Strategy Meets Technology</p>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 1100px) { .hero-grid-override { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 640px) { .hero-stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}} />
    </section>
  );
}
