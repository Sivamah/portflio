"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const milestones = [
  {
    year: "2022",
    icon: "01",
    qrIcon: "🎓",
    nomadTag: "Foundation",
    qrTag: "INITIATION",
    title: "Started CSE Journey",
    qrTitle: "CSE JOURNEY INITIALIZED",
    description: "Joined Dr. N.G.P Institute of Technology. Began Computer Science Engineering — laying the foundation.",
    color: "#163A63",
    qrColor: "#3B82F6",
  },
  {
    year: "2023",
    icon: "02",
    qrIcon: "💻",
    nomadTag: "Core Skills",
    qrTag: "CORE MODULES",
    title: "Learned Java & Python",
    qrTitle: "CORE STACK ACQUIRED",
    description: "Mastered Java, Python, and SQL. Built strong programming fundamentals and algorithmic problem-solving.",
    color: "#2F5D8A",
    qrColor: "#8B5CF6",
  },
  {
    year: "2024",
    icon: "03",
    qrIcon: "🚀",
    nomadTag: "Real-World",
    qrTag: "DEPLOYMENT",
    title: "Built Real Projects",
    qrTitle: "PROJECTS DEPLOYED",
    description: "Deployed real-world applications — AI chess assistant, learning platform, and pharmacy management system.",
    color: "#4A7CA8",
    qrColor: "#00E5FF",
  },
  {
    year: "2025",
    icon: "04",
    qrIcon: "☁️",
    nomadTag: "Industry",
    qrTag: "CLOUD OPS",
    title: "AWS Internship",
    qrTitle: "AWS CLOUD OPERATIONS",
    description: "AWS Cloud Internship at App Innovation Technologies. Hands-on cloud architecture, IAM, and deployment.",
    color: "#163A63",
    qrColor: "#F59E0B",
  },
  {
    year: "FUTURE",
    icon: "→",
    qrIcon: "⚡",
    nomadTag: "Vision",
    qrTag: "MISSION TARGET",
    title: "Software & Cloud Engineer",
    qrTitle: "TARGET: SOFTWARE + CLOUD ENGINEER",
    description: "Building impactful, scalable software as a full-time Software Engineer and Cloud Engineer.",
    color: "#2F5D8A",
    qrColor: "#22C55E",
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.1 });
  const theme = useTheme();
  const isNomad = theme === "nomad";

  return (
    <section id="journey" style={{ background: isNomad ? "var(--c-surface)" : "#0A0F1E", position:"relative" }} className={isNomad ? "section-alt" : ""}>
      {!isNomad && (
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />
      )}

      <div ref={ref} className="section" style={{ position:"relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:56 }}>
          <div className="section-label">
            <span>{isNomad ? "↗" : "📍"}</span>
            {isNomad ? "Career Timeline" : "NAVIGATION LOG"}
          </div>
          {isNomad && <div className="arch-divider" />}
          <h2 className="text-section-title font-display">
            {isNomad ? (
              <>The <span className="gradient-text">Route</span></>
            ) : (
              <span className="gradient-text glow-text">THE ROUTE</span>
            )}
          </h2>
          <p style={{ color:"var(--c-text-2)", marginTop:10, maxWidth:480, fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif", fontSize:"0.88rem", lineHeight:1.75 }}>
            {isNomad
              ? "A structured progression — from first principles to building scalable, real-world software systems."
              : "MISSION TIMELINE // Charting the strategic milestones of a software engineering career in progress."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:"relative", paddingLeft:"52px" }}>
          <motion.div
            initial={{ height:0 }} animate={inView?{height:"100%"}:{}}
            transition={{ duration:1.8, ease:"easeInOut" }}
            className="neon-route-line"
            style={{ height:"100%" }}
          />

          <div style={{ display:"flex", flexDirection:"column", gap:"40px" }}>
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity:0, x:-32 }}
                animate={inView?{opacity:1,x:0}:{}}
                transition={{ duration:0.5, delay:i*0.15 }}
                style={{ position:"relative" }}
              >
                {/* Node */}
                <div style={{
                  position:"absolute", left:"-52px", top:"24px", transform:"translateY(-50%)",
                  width: isNomad ? "28px" : "30px",
                  height: isNomad ? "28px" : "30px",
                  borderRadius: isNomad ? "4px" : "50%",
                  background: isNomad ? "var(--c-surface)" : "#0A0F1E",
                  border: `1.5px solid ${isNomad ? m.color : m.qrColor}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize: isNomad ? "0.55rem" : "0.85rem",
                  fontWeight: 700,
                  color: isNomad ? m.color : m.qrColor,
                  fontFamily: isNomad ? "DM Sans, sans-serif" : "inherit",
                  boxShadow: isNomad
                    ? `0 2px 8px rgba(22,58,99,0.1)`
                    : `0 0 16px ${m.qrColor}50, 0 0 32px ${m.qrColor}20`,
                  zIndex:1,
                }}>
                  {isNomad ? m.icon : m.qrIcon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: isNomad ? 6 : 4 }}
                  transition={{ type:"spring", stiffness:300, damping:24 }}
                  style={{
                    background: isNomad ? "var(--c-surface)" : "#0F172A",
                    border: `1px solid ${isNomad ? "var(--c-border)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: isNomad ? "12px" : "12px",
                    padding:"22px 26px",
                    boxShadow: isNomad ? "var(--shadow-card)" : "var(--shadow-card)",
                    position:"relative", overflow:"hidden",
                  }}
                >
                  {isNomad && (
                    <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"3px", background:`linear-gradient(to bottom, ${m.color}, transparent)`, opacity:0.5 }} />
                  )}
                  {!isNomad && (
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg, ${m.qrColor}, transparent)` }} />
                  )}

                  <div style={{ display:"flex", alignItems:"flex-start", gap:16 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                        <span style={{ fontSize:isNomad?"0.78rem":"0.7rem", fontWeight:700, color:isNomad?m.color:m.qrColor,
                          fontFamily:isNomad?"DM Sans, sans-serif":"Orbitron, monospace", letterSpacing:isNomad?"0.02em":"0.16em" }}>
                          {m.year}
                        </span>
                        <span style={{ fontSize:"0.62rem", fontWeight:600, color:"var(--c-text-3)",
                          background: isNomad ? "var(--c-surface-2)" : "rgba(255,255,255,0.05)",
                          padding:"2px 8px", borderRadius: isNomad ? 4 : 4,
                          border:`1px solid ${isNomad?"var(--c-border)":"rgba(255,255,255,0.06)"}`,
                          fontFamily: isNomad ? "DM Sans, sans-serif" : "Space Grotesk, sans-serif",
                          letterSpacing: isNomad ? "0.04em" : "0.1em",
                          textTransform:"uppercase",
                        }}>
                          {isNomad ? m.nomadTag : m.qrTag}
                        </span>
                      </div>
                      <h3 style={{ fontSize:isNomad?"1rem":"0.88rem", fontWeight:700, color:"var(--c-text-1)",
                        fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif",
                        letterSpacing:isNomad?"0":"0.05em", textTransform:isNomad?"none":"uppercase",
                        marginBottom:8, lineHeight:1.35 }}>
                        {isNomad ? m.title : m.qrTitle}
                      </h3>
                      <p style={{ fontSize:"0.84rem", color:"var(--c-text-2)", lineHeight:1.7,
                        fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>
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
    </section>
  );
}
