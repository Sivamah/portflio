"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const skills = [
  { name: "Java", icon: "☕", level: 90, color: "#F97316", darkColor: "#F97316", desc: "Primary Language" },
  { name: "Python", icon: "🐍", level: 85, color: "#3B82F6", darkColor: "#3B82F6", desc: "Scripting & AI" },
  { name: "AWS", icon: "☁️", level: 85, color: "#F59E0B", darkColor: "#F59E0B", desc: "Cloud Platform" },
  { name: "Backend Dev", icon: "⚙️", level: 80, color: "#8B5CF6", darkColor: "#8B5CF6", desc: "APIs & Systems" },
  { name: "Git", icon: "📚", level: 88, color: "#22C55E", darkColor: "#22C55E", desc: "Version Control" },
  { name: "Problem Solving", icon: "♟️", level: 92, color: "#00E5FF", darkColor: "#00E5FF", desc: "Algorithms & Logic" },
];

const radarData = [
  { label: "Java", value: 90 },
  { label: "Python", value: 85 },
  { label: "Cloud", value: 85 },
  { label: "Problem Solving", value: 92 },
  { label: "DevOps", value: 75 },
  { label: "Backend", value: 80 },
];

function RadarChart({ animated, isNature }: { animated: boolean; isNature: boolean }) {
  const size = 280;
  const center = size / 2;
  const maxR = 100;
  const n = radarData.length;
  const step = (2 * Math.PI) / n;

  const pt = (angle: number, r: number) => ({
    x: center + r * Math.sin(angle),
    y: center - r * Math.cos(angle),
  });

  const gridPolys = Array.from({ length: 5 }, (_, i) => {
    const r = (maxR / 5) * (i + 1);
    return Array.from({ length: n }, (__, j) => { const p = pt(j * step, r); return `${p.x},${p.y}`; }).join(" ");
  });

  const dataPoly = radarData.map((d, i) => {
    const p = pt(i * step, animated ? (d.value / 100) * maxR : 0);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isNature ? "#6E8B60" : "#3B82F6"} stopOpacity={isNature ? "0.15" : "0.2"} />
          <stop offset="100%" stopColor={isNature ? "#A67C52" : "#8B5CF6"} stopOpacity={isNature ? "0.1" : "0.15"} />
        </linearGradient>
        <filter id="radarGlow">
          <feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {gridPolys.map((pts, i) => (
        <polygon key={i} points={pts} fill="none"
          stroke={isNature ? "rgba(110,139,96,0.12)" : "rgba(59,130,246,0.08)"}
          strokeWidth="1" />
      ))}

      {Array.from({ length: n }, (_, i) => {
        const p = pt(i * step, maxR);
        return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y}
          stroke={isNature ? "rgba(110,139,96,0.1)" : "rgba(59,130,246,0.06)"}
          strokeWidth="1" />;
      })}

      <motion.polygon
        points={dataPoly}
        fill="url(#radarFill)"
        stroke={isNature ? "#6E8B60" : "url(#radarGrad)"}
        strokeWidth="2"
        animate={{ points: dataPoly }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        filter={!isNature ? "url(#radarGlow)" : undefined}
      />

      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {radarData.map((d, i) => {
        const p = pt(i * step, maxR + 22);
        return (
          <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
            fontSize={isNature ? "11" : "10"} fontWeight="700"
            fill={isNature ? "#6D746A" : "#94A3B8"}
            fontFamily={isNature ? "Inter, sans-serif" : "Space Grotesk, sans-serif"}
            letterSpacing={isNature ? "0" : "0.05em"}>
            {isNature ? d.label : d.label.toUpperCase()}
          </text>
        );
      })}

      {radarData.map((d, i) => {
        const r = (d.value / 100) * maxR;
        const p = pt(i * step, animated ? r : 0);
        return (
          <circle key={i} cx={p.x} cy={p.y} r={isNature ? "4" : "3"}
            fill={isNature ? "#6E8B60" : "#00E5FF"}
            filter={!isNature ? "url(#radarGlow)" : undefined} />
        );
      })}
    </svg>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="skills" style={{ background: isNature ? "var(--c-surface-2)" : "#0F172A", position: "relative" }}>
      {/* QR grid */}
      {!isNature && (
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
      )}

      <div ref={ref} className="section" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>{isNature ? "🌿" : "⚡"}</span>
            {isNature ? "Technology Ecosystem" : "TECH ARSENAL"}
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>My Tech <span className="gradient-text">Ecosystem</span></>
            ) : (
              <span className="gradient-text glow-text">TECH ARSENAL</span>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 10, maxWidth: 440, fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif", fontStyle: isNature ? "italic" : "normal", fontSize: "0.86rem" }}>
            {isNature
              ? "The tools and technologies that form my growing digital garden."
              : "WEAPONS OF CHOICE // Technologies powering the engineering arsenal."}
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="skills-grid-override">

          {/* Radar chart panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              background: isNature ? "var(--c-surface)" : "#0A0F1E",
              border: `1px solid ${isNature ? "var(--c-border)" : "rgba(59,130,246,0.12)"}`,
              borderRadius: isNature ? "20px" : "12px",
              padding: "28px",
              boxShadow: isNature ? "var(--shadow-card)" : "0 4px 24px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {!isNature && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #3B82F6, #8B5CF6, transparent)" }} />}
            <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--c-text-2)", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: isNature ? "Inter" : "Orbitron, monospace" }}>
              {isNature ? "🌱 Skill Growth Map" : "// SKILL MATRIX"}
            </p>
            <RadarChart animated={inView} isNature={isNature} />
          </motion.div>

          {/* Skill cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: isNature ? "var(--c-surface)" : "#0F172A",
                  border: `1px solid ${isNature ? "var(--c-border)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: isNature ? "16px" : "10px",
                  padding: "18px 16px",
                  boxShadow: isNature ? "var(--shadow-xs)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  if (!isNature) {
                    const el = e.currentTarget;
                    el.style.borderColor = `${skill.darkColor}40`;
                    el.style.boxShadow = `0 0 20px ${skill.darkColor}15, 0 8px 32px rgba(0,0,0,0.5)`;
                  }
                }}
                onMouseLeave={e => {
                  if (!isNature) {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.boxShadow = "none";
                  }
                }}
              >
                {/* Accent line */}
                {!isNature && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${skill.darkColor}, transparent)` }} />}

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
                  <div>
                    <p style={{ fontSize: isNature ? "0.9rem" : "0.78rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: isNature ? "Sora, sans-serif" : "Space Grotesk, sans-serif", letterSpacing: isNature ? "0" : "0.04em", textTransform: isNature ? "none" : "uppercase" }}>
                      {skill.name}
                    </p>
                    <p style={{ fontSize: "0.6rem", color: "var(--c-text-3)", fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {skill.desc}
                    </p>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: "0.7rem", fontWeight: 800, color: isNature ? skill.color : skill.darkColor, fontFamily: isNature ? "Sora" : "Orbitron, monospace" }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{ height: isNature ? "6px" : "4px", background: isNature ? "var(--c-surface-2)" : "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: isNature
                        ? "var(--g-primary)"
                        : `linear-gradient(90deg, ${skill.darkColor}, ${skill.darkColor}80)`,
                      borderRadius: 99,
                      boxShadow: !isNature ? `0 0 8px ${skill.darkColor}60` : "none",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) { .skills-grid-override { grid-template-columns: 1fr !important; } }
      `}} />
    </section>
  );
}
