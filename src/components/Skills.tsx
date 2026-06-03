"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const skills = [
  { name:"Java",           icon:"☕", level:90, nomadColor:"#163A63", qrColor:"#F97316", desc:"Primary Language" },
  { name:"Python",         icon:"🐍", level:85, nomadColor:"#2F5D8A", qrColor:"#3B82F6", desc:"Scripting & AI" },
  { name:"AWS",            icon:"☁️", level:85, nomadColor:"#163A63", qrColor:"#F59E0B", desc:"Cloud Platform" },
  { name:"Backend Dev",   icon:"⚙️", level:80, nomadColor:"#4A7CA8", qrColor:"#8B5CF6", desc:"APIs & Systems" },
  { name:"Git",            icon:"📚", level:88, nomadColor:"#2F5D8A", qrColor:"#22C55E", desc:"Version Control" },
  { name:"Problem Solving",icon:"♟️", level:92, nomadColor:"#163A63", qrColor:"#00E5FF", desc:"Algorithms & Logic" },
];

const radarData = [
  { label:"Java", value:90 }, { label:"Python", value:85 }, { label:"Cloud", value:85 },
  { label:"Problem Solving", value:92 }, { label:"DevOps", value:75 }, { label:"Backend", value:80 },
];

function RadarChart({ animated, isNomad }: { animated: boolean; isNomad: boolean }) {
  const size = 280, center = size/2, maxR = 100, n = radarData.length;
  const step = (2*Math.PI)/n;
  const pt = (a:number,r:number) => ({ x:center+r*Math.sin(a), y:center-r*Math.cos(a) });
  const grids = Array.from({length:5},(_,i)=>Array.from({length:n},(__,j)=>{const p=pt(j*step,(maxR/5)*(i+1));return`${p.x},${p.y}`;}).join(" "));
  const dataPoly = radarData.map((d,i)=>{const p=pt(i*step,animated?(d.value/100)*maxR:0);return`${p.x},${p.y}`;}).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isNomad?"#163A63":"#3B82F6"} stopOpacity={isNomad?"0.1":"0.2"} />
          <stop offset="100%" stopColor={isNomad?"#4A7CA8":"#8B5CF6"} stopOpacity={isNomad?"0.06":"0.15"} />
        </linearGradient>
        <filter id="rGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      {grids.map((pts,i)=><polygon key={i} points={pts} fill="none" stroke={isNomad?"rgba(22,58,99,0.1)":"rgba(59,130,246,0.08)"} strokeWidth="1"/>)}
      {Array.from({length:n},(_,i)=>{const p=pt(i*step,maxR);return<line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke={isNomad?"rgba(22,58,99,0.08)":"rgba(59,130,246,0.06)"} strokeWidth="1"/>;} )}
      <motion.polygon points={dataPoly} fill="url(#radarFill)" stroke={isNomad?"#2F5D8A":"url(#radarG)"} strokeWidth="2"
        animate={{points:dataPoly}} transition={{duration:1.2,ease:"easeOut"}} filter={!isNomad?"url(#rGlow)":undefined} />
      <defs><linearGradient id="radarG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6"/><stop offset="100%" stopColor="#8B5CF6"/></linearGradient></defs>
      {radarData.map((d,i)=>{const p=pt(i*step,maxR+22);return(
        <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
          fontSize={isNomad?"10.5":"10"} fontWeight="700"
          fill={isNomad?"#5B6472":"#94A3B8"}
          fontFamily={isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif"}
          letterSpacing={isNomad?"0.01em":"0.05em"}>
          {isNomad?d.label:d.label.toUpperCase()}
        </text>
      );})}
      {radarData.map((d,i)=>{const p=pt(i*step,animated?(d.value/100)*maxR:0);return(
        <circle key={i} cx={p.x} cy={p.y} r={isNomad?"4":"3"}
          fill={isNomad?"#163A63":"#00E5FF"} filter={!isNomad?"url(#rGlow)":undefined} />
      );})}
    </svg>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.15 });
  const theme = useTheme();
  const isNomad = theme === "nomad";

  return (
    <section id="skills" style={{ background: isNomad ? "var(--c-bg)" : "#0F172A", position:"relative" }}>
      {!isNomad && <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />}

      <div ref={ref} className="section" style={{ position:"relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:48 }}>
          <div className="section-label">
            <span>{isNomad?"▦":"⚡"}</span>
            {isNomad ? "Tech Stack" : "TECH ARSENAL"}
          </div>
          {isNomad && <div className="arch-divider" />}
          <h2 className="text-section-title font-display">
            {isNomad ? (
              <>Tech <span className="gradient-text">Arsenal</span></>
            ) : (
              <span className="gradient-text glow-text">TECH ARSENAL</span>
            )}
          </h2>
          <p style={{ color:"var(--c-text-2)", marginTop:10, maxWidth:440, fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif", fontSize:"0.87rem", lineHeight:1.75 }}>
            {isNomad
              ? "Technologies and tools — selected for scale, reliability, and real-world impact."
              : "WEAPONS OF CHOICE // Technologies powering the engineering arsenal."}
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40 }} className="skills-grid-override">

          {/* Radar */}
          <motion.div initial={{ opacity:0, x:-28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.65 }}
            style={{
              background: isNomad ? "var(--c-surface)" : "#0A0F1E",
              border: `1px solid ${isNomad ? "var(--c-border)" : "rgba(59,130,246,0.1)"}`,
              borderRadius: isNomad ? "16px" : "12px",
              padding:"28px", boxShadow: isNomad ? "var(--shadow-card)" : "0 4px 24px rgba(0,0,0,0.5)",
              display:"flex", flexDirection:"column", alignItems:"center", gap:12, position:"relative", overflow:"hidden",
            }}
          >
            {isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"var(--g-primary)", opacity:0.15 }} />}
            {!isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,#3B82F6,#8B5CF6,transparent)" }} />}
            <p style={{ fontSize:"0.65rem", fontWeight:700, color:"var(--c-text-3)", textTransform:"uppercase", letterSpacing:"0.14em", fontFamily:isNomad?"DM Sans, sans-serif":"Orbitron, monospace" }}>
              {isNomad ? "Skill Profile" : "// SKILL MATRIX"}
            </p>
            <RadarChart animated={inView} isNomad={isNomad} />
          </motion.div>

          {/* Skill cards */}
          <motion.div initial={{ opacity:0, x:28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.65 }}
            style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {skills.map((skill, i) => (
              <motion.div key={skill.name}
                initial={{ opacity:0, y:18 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ delay:0.08+i*0.08 }}
                whileHover={{ y:-5 }}
                style={{
                  background: isNomad ? "var(--c-surface)" : "#0F172A",
                  border: `1px solid ${isNomad ? "var(--c-border)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: isNomad ? "12px" : "10px",
                  padding:"18px 14px",
                  boxShadow: isNomad ? "var(--shadow-xs)" : "none",
                  display:"flex", flexDirection:"column", gap:10,
                  position:"relative", overflow:"hidden",
                  transition:"all 0.25s ease",
                }}
                onMouseEnter={e => {
                  if (!isNomad) {
                    e.currentTarget.style.borderColor = `${skill.qrColor}35`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${skill.qrColor}12, 0 8px 32px rgba(0,0,0,0.5)`;
                  }
                }}
                onMouseLeave={e => {
                  if (!isNomad) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${skill.nomadColor}30,transparent)` }} />}
                {!isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${skill.qrColor},transparent)` }} />}

                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:"1.3rem" }}>{skill.icon}</span>
                  <div>
                    <p style={{ fontSize:isNomad?"0.88rem":"0.76rem", fontWeight:700, color:"var(--c-text-1)",
                      fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif",
                      letterSpacing:isNomad?"0":"0.04em", textTransform:isNomad?"none":"uppercase" }}>
                      {skill.name}
                    </p>
                    <p style={{ fontSize:"0.58rem", color:"var(--c-text-3)", letterSpacing:"0.06em", textTransform:"uppercase", fontFamily:"DM Sans, sans-serif" }}>
                      {skill.desc}
                    </p>
                  </div>
                  <span style={{ marginLeft:"auto", fontSize:"0.68rem", fontWeight:800,
                    color:isNomad?skill.nomadColor:skill.qrColor,
                    fontFamily:isNomad?"DM Sans, sans-serif":"Orbitron, monospace" }}>
                    {skill.level}%
                  </span>
                </div>

                <div style={{ height:isNomad?"5px":"3px", background:"var(--c-surface-2)", borderRadius:99, overflow:"hidden" }}>
                  <motion.div initial={{ width:0 }} animate={inView?{width:`${skill.level}%`}:{}}
                    transition={{ duration:1.1, delay:0.25+i*0.07, ease:"easeOut" }}
                    style={{
                      height:"100%", borderRadius:99,
                      background: isNomad ? `linear-gradient(90deg,${skill.nomadColor},${skill.nomadColor}80)` : `linear-gradient(90deg,${skill.qrColor},${skill.qrColor}70)`,
                      boxShadow: !isNomad ? `0 0 6px ${skill.qrColor}50` : "none",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width:900px) { .skills-grid-override { grid-template-columns:1fr !important; } }
      `}} />
    </section>
  );
}
