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
    natureDesc: "A voice-based chess game where natural language commands move pieces, guided by Stockfish AI.",
    techDesc: "Voice-controlled chess engine using Whisper speech recognition and Stockfish AI. Natural language commands drive real-time move execution and strategy suggestions.",
    preview: "/proj-chess.png",
    tech: [
      { name: "Python", color: "tag-blue" },
      { name: "Pygame", color: "tag-purple" },
      { name: "Whisper AI", color: "tag-cyan" },
      { name: "Stockfish", color: "tag-orange" },
    ],
    status: "Completed" as const,
    natureCategory: "🌳 AI Creation",
    techCategory: "AI // CHESS ENGINE",
    gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
    github: "https://github.com/Sivamah/Voice-chess-online-",
    hasLiveDemo: false,
  },
  {
    id: 2,
    title: "Skill Exchange Platform",
    natureDesc: "A credit-based peer ecosystem where knowledge is cultivated and exchanged organically between learners.",
    techDesc: "Credit-based P2P learning protocol with user authentication, personalized dashboards, and intelligent skill-matching algorithms.",
    preview: "/proj-skills.png",
    tech: [
      { name: "HTML", color: "tag-orange" },
      { name: "CSS", color: "tag-pink" },
      { name: "JavaScript", color: "tag-purple" },
      { name: "Backend", color: "tag-blue" },
    ],
    status: "Completed" as const,
    natureCategory: "🌿 Full Stack",
    techCategory: "FULL STACK // WEB",
    gradient: "linear-gradient(135deg, #8B5CF6, #F97316)",
    github: "https://github.com/Sivamah",
    hasLiveDemo: false,
  },
  {
    id: 3,
    title: "Medicine Expiry System",
    natureDesc: "A pharmacy dashboard that nurtures inventory health, tracking expiry dates with care and precision.",
    techDesc: "Pharmacy inventory management system with CRUD operations, real-time expiry alerts, and a clean command-dashboard UI.",
    preview: "/proj-medicine.png",
    tech: [
      { name: "HTML", color: "tag-blue" },
      { name: "CSS", color: "tag-purple" },
      { name: "JavaScript", color: "tag-cyan" },
      { name: "SQLite", color: "tag-green" },
    ],
    status: "Completed" as const,
    natureCategory: "🍃 Web App",
    techCategory: "WEB // DATABASE",
    gradient: "linear-gradient(135deg, #00E5FF, #22C55E)",
    github: "https://github.com/Sivamah",
    hasLiveDemo: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<Filter>("All");
  const theme = useTheme();
  const isNature = theme === "nature";

  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" style={{ background: isNature ? "var(--c-bg)" : "#050816", position: "relative" }}>
      {!isNature && (
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
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
            <span>{isNature ? "🌱" : "♟️"}</span>
            {isNature ? "Projects Garden" : "COMMAND CENTER"}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <h2 className="text-section-title font-display">
              {isNature ? (
                <>My <span className="gradient-text">Garden</span> of Work</>
              ) : (
                <span className="gradient-text glow-text">PROJECT COMMAND CENTER</span>
              )}
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: 8 }}>
              {(["All", "Completed", "In Progress"] as Filter[]).map((f) => (
                <motion.button key={f} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: isNature ? 99 : 6,
                    fontSize: isNature ? "0.82rem" : "0.68rem",
                    fontWeight: 700,
                    border: "1px solid",
                    borderColor: filter === f ? "var(--c-primary)" : "var(--c-border)",
                    background: filter === f ? "var(--c-primary-soft)" : "var(--c-surface)",
                    color: filter === f ? "var(--c-primary)" : "var(--c-text-2)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif",
                    letterSpacing: isNature ? "0" : "0.08em",
                    textTransform: isNature ? "none" : "uppercase",
                    boxShadow: filter === f && !isNature ? "0 0 12px rgba(59,130,246,0.2)" : "none",
                  }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="portfolio-grid-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="project-card"
              >
                {/* Preview */}
                <div style={{ position: "relative", height: 190, overflow: "hidden", background: "var(--c-surface-2)" }}>
                  {project.preview ? (
                    <Image src={project.preview} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: project.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "3rem" }}>♟️</span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: isNature ? "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" : "linear-gradient(to top, rgba(5,8,22,0.7) 0%, transparent 60%)" }} />

                  {/* Category badge */}
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: isNature ? "rgba(245,245,239,0.95)" : "rgba(10,15,35,0.92)",
                    borderRadius: isNature ? 99 : 6,
                    padding: "3px 10px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: isNature ? "var(--c-primary)" : "#3B82F6",
                    border: `1px solid ${isNature ? "var(--c-border)" : "rgba(59,130,246,0.25)"}`,
                    backdropFilter: "blur(8px)",
                    fontFamily: isNature ? "Inter" : "Orbitron, monospace",
                    letterSpacing: isNature ? "0" : "0.08em",
                  }}>
                    {isNature ? project.natureCategory : project.techCategory}
                  </div>

                  {/* Status */}
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    display: "flex", alignItems: "center", gap: 5,
                    background: isNature ? "rgba(245,245,239,0.95)" : "rgba(10,15,35,0.92)",
                    borderRadius: 6, padding: "3px 10px",
                    fontSize: "0.65rem", fontWeight: 700,
                    color: project.status === "Completed" ? "#22C55E" : "#F59E0B",
                    border: `1px solid ${project.status === "Completed" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`,
                    backdropFilter: "blur(8px)",
                    fontFamily: isNature ? "Inter" : "Space Grotesk, sans-serif",
                    letterSpacing: "0.04em",
                    boxShadow: !isNature ? `0 0 10px ${project.status === "Completed" ? "rgba(34,197,94,0.2)" : "rgba(245,158,11,0.2)"}` : "none",
                  }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor", boxShadow: !isNature ? "0 0 6px currentColor" : "none" }} />
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 20px 16px", display: "flex", flexDirection: "column", flex: 1, background: isNature ? "var(--c-surface)" : "#0F172A" }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: isNature ? "1rem" : "0.88rem",
                    fontWeight: 700,
                    color: "var(--c-text-1)",
                    fontFamily: isNature ? "Sora, sans-serif" : "Space Grotesk, sans-serif",
                    letterSpacing: isNature ? "0" : "0.04em",
                    marginBottom: 10,
                    lineHeight: 1.35,
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: "0.82rem",
                    color: "var(--c-text-2)",
                    lineHeight: 1.65,
                    marginBottom: 14,
                    flex: 1,
                    fontFamily: isNature ? "Lora, serif" : "Space Grotesk, sans-serif",
                    fontStyle: isNature ? "italic" : "normal",
                  }}>
                    {isNature ? project.natureDesc : project.techDesc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {project.tech.map((t) => (
                      <span key={t.name} className={`tech-tag ${t.color}`}>{t.name}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: 8, paddingTop: 12, borderTop: `1px solid ${isNature ? "var(--c-border-soft)" : "rgba(255,255,255,0.05)"}` }}>
                    <a href={project.github} id={`proj-github-${project.id}`} target="_blank" rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: "center", padding: "8px 12px", fontSize: "0.75rem" }}>
                      <FaGithub size={13} />
                      {isNature ? "View Code" : "SOURCE CODE"}
                    </a>
                    {project.hasLiveDemo && (
                      <a href="#" id={`proj-demo-${project.id}`} className="btn-primary"
                        style={{ flex: 1, justifyContent: "center", padding: "8px 12px", fontSize: "0.75rem" }}>
                        <ExternalLink size={13} /> LIVE DEMO
                      </a>
                    )}
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
