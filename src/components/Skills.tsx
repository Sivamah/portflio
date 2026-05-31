"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

interface RadarPoint {
  label: string;
  value: number;
}

const radarData: RadarPoint[] = [
  { label: "Java", value: 90 },
  { label: "Python", value: 85 },
  { label: "Cloud", value: 80 },
  { label: "Problem Solving", value: 85 },
  { label: "DevOps", value: 75 },
  { label: "Backend", value: 80 },
];

function RadarChart({ data, animated, theme }: { data: RadarPoint[]; animated: boolean; theme: string }) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 100;
  const levels = 5;
  const n = data.length;
  const angleStep = (2 * Math.PI) / n;
  const isNature = theme === "nature";

  const getPoint = (angle: number, radius: number) => ({
    x: center + radius * Math.sin(angle),
    y: center - radius * Math.cos(angle),
  });

  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const r = (maxRadius / levels) * (i + 1);
    return Array.from({ length: n }, (__, j) => {
      const p = getPoint(j * angleStep, r);
      return `${p.x},${p.y}`;
    }).join(" ");
  });

  const dataPolygon = data.map((d, i) => {
    const r = (d.value / 100) * maxRadius;
    const p = getPoint(i * angleStep, animated ? r : 0);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      {gridPolygons.map((pts, i) => (
        <polygon key={i} points={pts}
          fill="none"
          stroke={isNature ? "rgba(110,139,96,0.15)" : "rgba(0,229,255,0.1)"}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: n }, (_, i) => {
        const p = getPoint(i * angleStep, maxRadius);
        return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y}
          stroke={isNature ? "rgba(110,139,96,0.12)" : "rgba(0,229,255,0.08)"}
          strokeWidth="1"
        />;
      })}
      <motion.polygon
        points={dataPolygon}
        fill={isNature ? "rgba(110,139,96,0.15)" : "rgba(0,229,255,0.12)"}
        stroke={isNature ? "#6E8B60" : "url(#radarGrad)"}
        strokeWidth="2"
        animate={{ points: dataPolygon }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#8A2BE2" />
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const angle = i * angleStep;
        const labelR = maxRadius + 22;
        const p = getPoint(angle, labelR);
        return (
          <text key={i} x={p.x} y={p.y}
            textAnchor="middle" dominantBaseline="middle"
            fontSize="11" fontWeight="600"
            fill={isNature ? "#6D746A" : "#9EA4AB"}
            fontFamily="Inter, sans-serif"
          >
            {d.label}
          </text>
        );
      })}
      {data.map((d, i) => {
        const r = (d.value / 100) * maxRadius;
        const p = getPoint(i * angleStep, animated ? r : 0);
        return (
          <circle key={i} cx={p.x} cy={p.y} r="4"
            fill={isNature ? "#6E8B60" : "#00E5FF"}
          />
        );
      })}
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
    { name: "Cloud Deploy", icon: "🚀", level: 80 },
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
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <section id="skills" style={{ background: "var(--c-surface-2)" }}>
      <div ref={ref} className="section">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">
            <span>{isNature ? "🌿" : "⚡"}</span>
            {isNature ? "Technology Ecosystem" : "Tech Dashboard"}
          </div>
          <h2 className="text-section-title font-display">
            {isNature ? (
              <>My Tech <span className="gradient-text">Ecosystem</span></>
            ) : (
              <>Skills <span className="gradient-text">Dashboard</span></>
            )}
          </h2>
          <p style={{ color: "var(--c-text-2)", marginTop: 10, maxWidth: 440, fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif", fontStyle: isNature ? "italic" : "normal" }}>
            {isNature
              ? "The tools and technologies that form my growing digital garden."
              : "Technologies and tools powering my engineering workflow."}
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="skills-grid-override">

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              background: "var(--c-surface)",
              border: "1px solid var(--c-border)",
              borderRadius: isNature ? "20px" : "16px",
              padding: "32px",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--c-text-2)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {isNature ? "🌱 Skill Growth Map" : "⚡ Skill Radar"}
            </p>
            <RadarChart data={radarData} animated={inView} theme={theme} />
          </motion.div>

          {/* Tech Stack Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {Object.entries(techStack).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + ci * 0.1 }}
                style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: isNature ? "18px" : "14px",
                  padding: "20px 24px",
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--c-text-3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>
                  {isNature ? `🌿 ${category}` : category}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map((item) => (
                    <div key={item.name}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--c-text-1)" }}>{item.name}</span>
                        </div>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--c-primary)" }}>{item.level}%</span>
                      </div>
                      <div style={{ height: 6, background: "var(--c-surface-2)", borderRadius: 99, overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + ci * 0.1, ease: "easeOut" }}
                          style={{
                            height: "100%",
                            background: "var(--g-primary)",
                            borderRadius: 99,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{
                background: "var(--c-surface)",
                border: "1px solid var(--c-border)",
                borderRadius: isNature ? "18px" : "14px",
                padding: "18px 24px",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--c-text-3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>
                {isNature ? "🍃 Tools & Environment" : "🛠️ Tools"}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tools.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: isNature ? 99 : 8,
                      background: "var(--c-primary-soft)",
                      border: "1px solid var(--c-border)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--c-primary)",
                    }}
                  >
                    <span>{t.icon}</span> {t.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .skills-grid-override { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
}
