"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RadarPoint {
  label: string;
  value: number; // 0-100
}

const radarData: RadarPoint[] = [
  { label: "Java", value: 90 },
  { label: "Python", value: 85 },
  { label: "Cloud", value: 80 },
  { label: "Problem Solving", value: 85 },
  { label: "DevOps", value: 75 },
  { label: "Backend", value: 80 },
];

function RadarChart({ data, animated }: { data: RadarPoint[]; animated: boolean }) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 100;
  const levels = 5;
  const n = data.length;
  const angleStep = (2 * Math.PI) / n;

  const getPoint = (angle: number, radius: number) => ({
    x: center + radius * Math.sin(angle),
    y: center - radius * Math.cos(angle),
  });

  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const r = (maxRadius / levels) * (i + 1);
    const points = Array.from({ length: n }, (__, j) => {
      const p = getPoint(j * angleStep, r);
      return `${p.x},${p.y}`;
    }).join(" ");
    return points;
  });

  const dataPolygon = data.map((d, i) => {
    const r = (d.value / 100) * maxRadius;
    const p = getPoint(i * angleStep, animated ? r : 0);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      {/* Grid polygons */}
      {gridPolygons.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="rgba(108,99,255,0.1)"
          strokeWidth={1}
        />
      ))}

      {/* Axis lines */}
      {data.map((_, i) => {
        const end = getPoint(i * angleStep, maxRadius);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={end.x}
            y2={end.y}
            stroke="rgba(108,99,255,0.1)"
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPolygon}
        fill="rgba(108,99,255,0.15)"
        stroke="url(#radarGradient)"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      {/* Data points */}
      {data.map((d, i) => {
        const r = (d.value / 100) * maxRadius;
        const p = getPoint(i * angleStep, r);
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill="var(--c-primary)"
            stroke="var(--c-surface)"
            strokeWidth={2}
          />
        );
      })}

      {/* Labels */}
      {data.map((d, i) => {
        const p = getPoint(i * angleStep, maxRadius + 22);
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--c-text-2)"
            fontSize="11"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            {d.label}
          </text>
        );
      })}

      <defs>
        <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--c-primary)" />
          <stop offset="100%" stopColor="var(--c-secondary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const techStack = {
  "Programming": [
    { name: "Java", icon: "☕", level: 90 },
    { name: "Python", icon: "🐍", level: 85 },
    { name: "C", icon: "⚙️", level: 80 },
  ],
  "Cloud": [
    { name: "AWS", icon: "☁️", level: 85 },
    { name: "IAM", icon: "🔐", level: 80 },
    { name: "Cloud Deployment", icon: "🚀", level: 80 },
  ],
};

const tools = [
  { name: "Git", icon: "📚" },
  { name: "GitHub", icon: "⚫" },
  { name: "VS Code", icon: "🔵" },
  { name: "IntelliJ IDEA", icon: "🟣" },
  { name: "Postman", icon: "🟠" },
  { name: "PyCharm", icon: "🟢" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" style={{ background: "var(--c-surface-2)" }}>
      <div ref={ref} className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">
            <span>⚡</span>
            Skills
          </div>
          <h2 className="text-section-title font-display">
            Skills <span className="gradient-text">Dashboard</span>
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 12 }}>
            A comprehensive view of my technical capabilities and toolset.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="skills-main-grid" style={{ marginBottom: 16 }}>
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "var(--c-surface)",
              borderRadius: "var(--radius)",
              padding: 32,
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <h3 style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--c-text-1)",
              fontFamily: "Sora, sans-serif",
              alignSelf: "flex-start",
            }}>
              Skills Radar
            </h3>
            <RadarChart data={radarData} animated={inView} />
            {/* Legend */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", width: "100%", marginTop: 8 }}>
              {radarData.map((d) => (
                <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--c-primary)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "var(--c-text-2)", fontWeight: 500 }}>{d.label}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--c-primary)", fontWeight: 700, marginLeft: "auto" }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: "var(--c-surface)",
              borderRadius: "var(--radius)",
              padding: 32,
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h3 style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--c-text-1)",
              fontFamily: "Sora, sans-serif",
              marginBottom: 24,
            }}>
              Tech Stack
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category}>
                  <p style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--c-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                  }}>
                    {category}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", fontWeight: 600, color: "var(--c-text-1)" }}>
                            <span style={{ fontSize: "1rem" }}>{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--c-text-3)" }}>{skill.level}%</span>
                        </div>
                        <div className="progress-track">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: "var(--c-surface)",
            borderRadius: "var(--radius)",
            padding: 32,
            border: "1px solid var(--c-border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3 style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--c-text-1)",
            fontFamily: "Sora, sans-serif",
            marginBottom: 24,
          }}>
            Tools & IDEs
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: 16,
          }}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="skill-card"
              >
                <span className="skill-icon">{tool.icon}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--c-text-2)" }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
