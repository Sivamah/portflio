"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

type Filter = "All" | "Completed" | "In Progress";

const projects = [
  {
    id: 1,
    title: "Voice Controlled AI Chess Assistant",
    nomadDesc: "A voice-driven chess interface powered by Stockfish AI and Whisper speech recognition — natural language moves a board in real time.",
    techDesc: "Voice-controlled chess engine using Whisper speech recognition and Stockfish AI. Natural language commands drive real-time move execution and strategy suggestions.",
    preview: "/proj-chess.png",
    tech: [
      { name:"Python",    color:"tag-blue" },
      { name:"Pygame",    color:"tag-purple" },
      { name:"Whisper AI",color:"tag-cyan" },
      { name:"Stockfish", color:"tag-orange" },
    ],
    status: "Completed" as const,
    nomadCategory: "AI + Chess",
    techCategory: "AI // CHESS ENGINE",
    gradient: "linear-gradient(135deg, #163A63, #2F5D8A)",
    github: "https://github.com/Sivamah/Voice-chess-online-",
  },
  {
    id: 2,
    title: "Skill Exchange Platform",
    nomadDesc: "A credit-based P2P learning marketplace where users trade skills and expertise with an intelligent matching algorithm.",
    techDesc: "Credit-based P2P learning protocol with user authentication, personalized dashboards, and intelligent skill-matching algorithms.",
    preview: "/proj-skills.png",
    tech: [
      { name:"HTML",       color:"tag-orange" },
      { name:"CSS",        color:"tag-pink" },
      { name:"JavaScript", color:"tag-purple" },
      { name:"Backend",    color:"tag-blue" },
    ],
    status: "Completed" as const,
    nomadCategory: "Full Stack Web",
    techCategory: "FULL STACK // WEB",
    gradient: "linear-gradient(135deg, #2F5D8A, #4A7CA8)",
    github: "https://github.com/Sivamah",
  },
  {
    id: 3,
    title: "Medicine Expiry System",
    nomadDesc: "A clean pharmacy inventory dashboard with CRUD operations, expiry tracking, and real-time alert management.",
    techDesc: "Pharmacy inventory management system with CRUD operations, real-time expiry alerts, and a clean command-dashboard UI.",
    preview: "/proj-medicine.png",
    tech: [
      { name:"HTML",       color:"tag-blue" },
      { name:"CSS",        color:"tag-purple" },
      { name:"JavaScript", color:"tag-cyan" },
      { name:"SQLite",     color:"tag-green" },
    ],
    status: "Completed" as const,
    nomadCategory: "Web App",
    techCategory: "WEB // DATABASE",
    gradient: "linear-gradient(135deg, #163A63, #2F5D8A)",
    github: "https://github.com/Sivamah",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.1 });
  const [filter, setFilter] = useState<Filter>("All");
  const theme = useTheme();
  const isNomad = theme === "nomad";

  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" style={{ background: isNomad ? "var(--c-surface)" : "#050816", position:"relative" }} className={isNomad?"section-alt":""}>
      {!isNomad && <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />}

      <div ref={ref} className="section" style={{ position:"relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:48 }}>
          <div className="section-label">
            <span>{isNomad?"⊡":"♟️"}</span>
            {isNomad ? "Selected Work" : "COMMAND CENTER"}
          </div>
          {isNomad && <div className="arch-divider" />}

          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
            <h2 className="text-section-title font-display">
              {isNomad ? (
                <>Project <span className="gradient-text">Command Center</span></>
              ) : (
                <span className="gradient-text glow-text">PROJECT COMMAND CENTER</span>
              )}
            </h2>

            {/* Filters */}
            <div style={{ display:"flex", gap:8 }}>
              {(["All","Completed","In Progress"] as Filter[]).map((f) => (
                <motion.button key={f} whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  onClick={() => setFilter(f)}
                  style={{
                    padding:"6px 14px", borderRadius: isNomad ? 6 : 6,
                    fontSize:isNomad?"0.78rem":"0.66rem", fontWeight:700,
                    border:"1px solid",
                    borderColor: filter===f ? "var(--c-primary)" : "var(--c-border)",
                    background: filter===f ? "var(--c-primary-soft)" : "var(--c-surface)",
                    color: filter===f ? "var(--c-primary)" : "var(--c-text-2)",
                    cursor:"pointer", transition:"all 0.18s",
                    fontFamily: isNomad ? "DM Sans, sans-serif" : "Space Grotesk, sans-serif",
                    letterSpacing: isNomad ? "0.02em" : "0.08em",
                    textTransform: isNomad ? "none" : "uppercase",
                    boxShadow: filter===f&&!isNomad ? "0 0 12px rgba(59,130,246,0.2)" : "none",
                  }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="portfolio-grid-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout
                initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, scale:0.95 }}
                transition={{ duration:0.38, delay:i*0.08 }}
                whileHover={{ y:-6 }}
                className="project-card"
              >
                {/* Preview */}
                <div style={{ position:"relative", height:190, overflow:"hidden", background:"var(--c-surface-2)" }}>
                  {project.preview ? (
                    <Image src={project.preview} alt={project.title} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" />
                  ) : (
                    <div style={{ width:"100%", height:"100%", background:project.gradient, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:"2.5rem" }}>♟️</span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div style={{ position:"absolute", inset:0, background: isNomad ? "linear-gradient(to top, rgba(22,58,99,0.2) 0%, transparent 50%)" : "linear-gradient(to top, rgba(5,8,22,0.7) 0%, transparent 60%)" }} />

                  {/* Category */}
                  <div style={{
                    position:"absolute", top:12, left:12,
                    background: isNomad ? "rgba(255,255,255,0.95)" : "rgba(10,15,35,0.92)",
                    borderRadius: isNomad ? 4 : 6, padding:"3px 10px",
                    fontSize:"0.62rem", fontWeight:700,
                    color: isNomad ? "var(--c-secondary)" : "#3B82F6",
                    border:`1px solid ${isNomad?"var(--c-border)":"rgba(59,130,246,0.25)"}`,
                    backdropFilter:"blur(8px)",
                    fontFamily: isNomad ? "DM Sans, sans-serif" : "Orbitron, monospace",
                    letterSpacing: isNomad ? "0.04em" : "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {isNomad ? project.nomadCategory : project.techCategory}
                  </div>

                  {/* Status */}
                  <div style={{
                    position:"absolute", top:12, right:12,
                    display:"flex", alignItems:"center", gap:5,
                    background: isNomad ? "rgba(255,255,255,0.95)" : "rgba(10,15,35,0.92)",
                    borderRadius:5, padding:"3px 10px",
                    fontSize:"0.62rem", fontWeight:700,
                    color: project.status==="Completed" ? "#16a34a" : "#d97706",
                    border:`1px solid ${project.status==="Completed"?"rgba(34,197,94,0.25)":"rgba(245,158,11,0.25)"}`,
                    backdropFilter:"blur(8px)",
                    fontFamily: isNomad ? "DM Sans, sans-serif" : "Space Grotesk, sans-serif",
                    letterSpacing:"0.04em",
                    boxShadow: !isNomad ? `0 0 8px ${project.status==="Completed"?"rgba(34,197,94,0.15)":"rgba(245,158,11,0.15)"}` : "none",
                  }}>
                    <div style={{ width:5, height:5, borderRadius:"50%", background:"currentColor" }} />
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding:"20px 20px 16px", display:"flex", flexDirection:"column", flex:1, background: isNomad ? "var(--c-surface)" : "#0F172A" }}>
                  <h3 style={{ fontSize:isNomad?"1rem":"0.88rem", fontWeight:700, color:"var(--c-text-1)",
                    fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif",
                    letterSpacing:isNomad?"0":"0.04em", marginBottom:10, lineHeight:1.35 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize:"0.83rem", color:"var(--c-text-2)", lineHeight:1.7, marginBottom:14, flex:1,
                    fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>
                    {isNomad ? project.nomadDesc : project.techDesc}
                  </p>

                  {/* Tags */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:14 }}>
                    {project.tech.map((t) => (
                      <span key={t.name} className={`tech-tag ${t.color}`}>{t.name}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display:"flex", gap:8, paddingTop:12, borderTop:`1px solid ${isNomad?"var(--c-border)":"rgba(255,255,255,0.05)"}` }}>
                    <a href={project.github} id={`proj-github-${project.id}`} target="_blank" rel="noopener noreferrer"
                      className="btn-secondary" style={{ flex:1, justifyContent:"center", padding:"8px 12px", fontSize:"0.75rem" }}>
                      <FaGithub size={13} /> {isNomad ? "View Code" : "SOURCE CODE"}
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      id={`proj-ext-${project.id}`}
                      style={{
                        display:"flex", alignItems:"center", justifyContent:"center",
                        width:36, height:36, borderRadius:8, border:"1px solid var(--c-border)",
                        background:"var(--c-surface-2)", color:"var(--c-text-2)", flexShrink:0,
                        transition:"all 0.18s",
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--c-primary)";e.currentTarget.style.color="var(--c-primary)";}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--c-border)";e.currentTarget.style.color="var(--c-text-2)";}}
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
