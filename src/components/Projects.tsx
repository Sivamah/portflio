"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type Filter = "All" | "Completed" | "In Progress";

const projects = [
  {
    id: 1,
    title: "Voice Controlled AI Chess Assistant",
    description:
      "A voice-based chess game using speech recognition and Stockfish AI. Players control pieces with natural language commands while the AI suggests optimal moves in real-time.",
    preview: "/proj-chess.png",
    tech: ["Python", "Pygame", "Whisper AI", "Stockfish"],
    techColors: ["purple", "blue", "pink", "orange"],
    status: "Completed" as const,
    category: "AI / Game Dev",
    gradient: "linear-gradient(135deg, #6C63FF, #FF6B9D)",
    github: "https://github.com/Sivamah/Voice-chess-online-",
    demo: "https://github.com/Sivamah/Voice-chess-online-",
    hasLiveDemo: false,
  },
  {
    id: 2,
    title: "Skill Exchange Learning Platform",
    description:
      "A credit-based peer learning ecosystem where users teach and learn skills. Features user authentication, personalized dashboards, and intelligent skill matching.",
    preview: "/proj-skills.png",
    tech: ["HTML", "CSS", "JavaScript", "Backend"],
    techColors: ["orange", "pink", "purple", "blue"],
    status: "Completed" as const,
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #FF8C42, #FF6B9D)",
    github: "https://github.com/Sivamah",
    demo: "https://github.com/Sivamah",
    hasLiveDemo: false,
  },
  {
    id: 3,
    title: "Medicine Expiry Management System",
    description:
      "A pharmacy management web app to track medicine inventory and expiry dates. Includes CRUD operations, expiry alerts, and a clean dashboard for pharmacists.",
    preview: "/proj-medicine.png",
    tech: ["HTML", "CSS", "JavaScript", "SQLite"],
    techColors: ["blue", "purple", "orange", "blue"],
    status: "Completed" as const,
    category: "Web App",
    gradient: "linear-gradient(135deg, #00C9B1, #00D4FF)",
    github: "https://github.com/Sivamah",
    demo: "https://github.com/Sivamah",
    hasLiveDemo: false,
  },
];

const tagColorMap: Record<string, string> = {
  purple: "tech-tag",
  blue: "tech-tag tag-blue",
  pink: "tech-tag tag-pink",
  orange: "tech-tag tag-orange",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" style={{ background: "var(--c-bg)" }}>
      <div ref={ref} className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>🚀</span>
            Projects
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2 className="text-section-title font-display">
              Command <span className="gradient-text">Center</span>
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: 8 }}>
              {(["All", "Completed", "In Progress"] as Filter[]).map((f) => (
                <motion.button
                  key={f}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 10,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    border: "1.5px solid",
                    borderColor:
                      filter === f ? "var(--c-primary)" : "var(--c-border-soft)",
                    background: filter === f ? "var(--c-primary-soft)" : "var(--c-surface)",
                    color:
                      filter === f ? "var(--c-primary)" : "var(--c-text-2)",
                    cursor: "pointer",
                    transition: "all 0.2s",
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
                whileHover={{ y: -8, boxShadow: "var(--shadow-glow)" }}
                className="project-card glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Preview */}
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                    background: project.preview
                      ? "var(--c-surface-2)"
                      : project.gradient,
                  }}
                >
                  {project.preview ? (
                    <Image
                      src={project.preview}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <div style={{ fontSize: "3rem" }}>☁️</div>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        Coming Soon
                      </p>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                    }}
                  />

                  {/* Category badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "rgba(255,255,255,0.95)",
                      borderRadius: 8,
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--c-primary)",
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Status */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.95)",
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color:
                        project.status === "Completed"
                          ? "#10b981"
                          : "var(--c-orange)",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "currentColor",
                      }}
                    />
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--c-text-1)",
                      fontFamily: "Sora, sans-serif",
                      marginBottom: 10,
                      lineHeight: 1.35,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--c-text-2)",
                      lineHeight: 1.65,
                      marginBottom: 18,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    {project.tech.map((t, ti) => (
                      <span
                        key={t}
                        className={tagColorMap[project.techColors[ti]] || "tech-tag"}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      paddingTop: 16,
                      borderTop: "1px solid var(--c-border-soft)",
                    }}
                  >
                    <a
                      href={project.github}
                      id={`proj-github-${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: "center", padding: "10px 16px" }}
                    >
                      <FaGithub size={14} />
                      Get Code
                    </a>
                    {project.hasLiveDemo && (
                      <a
                        href={project.demo}
                        id={`proj-demo-${project.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          padding: "10px 16px",
                          fontSize: "0.9rem",
                        }}
                      >
                        <ExternalLink size={14} />
                        View Live
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
