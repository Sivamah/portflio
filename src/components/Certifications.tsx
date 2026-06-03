"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    id:1, nomadIcon:"01", techIcon:"☁️",
    title:"AWS Cloud Practitioner",
    issuer:"Amazon Web Services",
    year:"2025",
    nomadBadge:"Cloud Certified",
    techBadge:"AWS CERTIFIED",
    color:"#163A63", qrColor:"#F59E0B",
    link:"https://aws.amazon.com/verification",
    discipline:"Cloud Computing",
  },
  {
    id:2, nomadIcon:"02", techIcon:"🎓",
    title:"NPTEL Elite Certificate",
    issuer:"National Programme on Technology Enhanced Learning",
    year:"2024",
    nomadBadge:"Elite Performer",
    techBadge:"ELITE PERFORMER",
    color:"#2F5D8A", qrColor:"#3B82F6",
    link:"https://nptel.ac.in",
    discipline:"Academic Excellence",
  },
  {
    id:3, nomadIcon:"03", techIcon:"⚙️",
    title:"C++ Programming",
    issuer:"Coursera / NPTEL",
    year:"2023",
    nomadBadge:"Certified",
    techBadge:"CERTIFIED",
    color:"#4A7CA8", qrColor:"#8B5CF6",
    link:"https://coursera.org",
    discipline:"Programming",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.2 });
  const theme = useTheme();
  const isNomad = theme === "nomad";

  return (
    <section id="certifications" style={{ background: isNomad ? "var(--c-bg)" : "#0A0F1E", position:"relative" }}>
      {!isNomad && <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(59,130,246,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.02) 1px, transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />}

      <div ref={ref} className="section" style={{ position:"relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:48 }}>
          <div className="section-label">
            <span>{isNomad?"◈":"🏆"}</span>
            {isNomad ? "Credentials" : "ACHIEVEMENTS"}
          </div>
          {isNomad && <div className="arch-divider" />}
          <h2 className="text-section-title font-display">
            {isNomad ? (
              <>Achievements &amp; <span className="gradient-text">Certifications</span></>
            ) : (
              <span className="gradient-text glow-text">ACHIEVEMENTS &amp; CERTIFICATIONS</span>
            )}
          </h2>
          <p style={{ color:"var(--c-text-2)", marginTop:10, maxWidth:440, fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif", fontSize:"0.87rem", lineHeight:1.75 }}>
            {isNomad
              ? "Formally recognised credentials in cloud computing, programming, and applied technology."
              : "MISSION CREDENTIALS // Verified achievements unlocked on the engineering path."}
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }} className="cert-grid-override">
          {certs.map((c, i) => (
            <motion.div key={c.id}
              initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
              transition={{ delay:i*0.12, duration:0.5 }}
              whileHover={isNomad
                ? { y:-6, boxShadow:"0 12px 36px rgba(22,58,99,0.1)" }
                : { y:-5 }
              }
              style={{
                background: isNomad ? "var(--c-surface)" : "#0F172A",
                border:`1px solid ${isNomad?"var(--c-border)":"rgba(255,255,255,0.07)"}`,
                borderRadius: isNomad ? "16px" : "12px",
                padding:"26px 22px",
                boxShadow: isNomad ? "var(--shadow-card)" : "none",
                display:"flex", flexDirection:"column", gap:14,
                cursor:"default", position:"relative", overflow:"hidden",
                transition:"all 0.28s ease",
              }}
              onMouseEnter={e => {
                if (!isNomad) {
                  e.currentTarget.style.borderColor = `${c.qrColor}35`;
                  e.currentTarget.style.boxShadow = `0 0 24px ${c.qrColor}12, 0 8px 32px rgba(0,0,0,0.5)`;
                }
              }}
              onMouseLeave={e => {
                if (!isNomad) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {/* Top accent */}
              {isNomad && <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${c.color},transparent)`, opacity:0.4 }} />}
              {!isNomad && (
                <>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${c.qrColor},transparent)`, boxShadow:`0 0 8px ${c.qrColor}` }} />
                  <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg,${c.qrColor}10,transparent)`, pointerEvents:"none" }} />
                </>
              )}

              {/* Number / Icon */}
              <div style={{
                width:44, height:44, borderRadius: isNomad ? 6 : 10,
                background: isNomad ? "var(--c-primary-soft)" : `${c.qrColor}14`,
                border:`1px solid ${isNomad?"var(--c-border)":c.qrColor+"30"}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize: isNomad ? "0.78rem" : "1.4rem",
                fontWeight:700, color:isNomad?c.color:undefined,
                fontFamily: isNomad ? "DM Sans, sans-serif" : "inherit",
                flexShrink:0,
                boxShadow: !isNomad ? `0 0 14px ${c.qrColor}22` : "none",
                position:"relative", zIndex:1,
              }}>
                {isNomad ? c.nomadIcon : c.techIcon}
              </div>

              {/* Badge */}
              <div style={{
                display:"inline-flex", alignItems:"center",
                padding:"3px 10px",
                borderRadius: isNomad ? 4 : 4,
                background: isNomad ? "var(--c-primary-soft)" : `${c.qrColor}12`,
                color: isNomad ? c.color : c.qrColor,
                fontSize: isNomad ? "0.66rem" : "0.6rem",
                fontWeight:700, width:"fit-content",
                border:`1px solid ${isNomad?"var(--c-border)":c.qrColor+"28"}`,
                fontFamily: isNomad ? "DM Sans, sans-serif" : "Orbitron, monospace",
                letterSpacing: isNomad ? "0.06em" : "0.12em",
                textTransform:"uppercase",
                boxShadow: !isNomad ? `0 0 8px ${c.qrColor}18` : "none",
                position:"relative", zIndex:1,
              }}>
                {isNomad ? c.nomadBadge : c.techBadge}
              </div>

              <div style={{ position:"relative", zIndex:1 }}>
                {isNomad && (
                  <p style={{ fontSize:"0.6rem", fontWeight:600, color:"var(--c-text-3)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:5, fontFamily:"DM Sans, sans-serif" }}>
                    {c.discipline}
                  </p>
                )}
                <h3 style={{ fontSize:isNomad?"1rem":"0.88rem", fontWeight:700, color:"var(--c-text-1)",
                  fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif",
                  letterSpacing:isNomad?"0":"0.04em", marginBottom:5, lineHeight:1.3 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize:"0.78rem", color:"var(--c-text-2)", fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif" }}>
                  {c.issuer}
                </p>
              </div>

              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:12, borderTop:`1px solid ${isNomad?"var(--c-border)":"rgba(255,255,255,0.05)"}`, position:"relative", zIndex:1 }}>
                <span style={{ fontSize:"0.72rem", fontWeight:800, color: isNomad?c.color:c.qrColor,
                  padding:"3px 9px", background: isNomad?"var(--c-primary-soft)":"rgba(255,255,255,0.04)",
                  borderRadius: isNomad?4:4,
                  border:`1px solid ${isNomad?"var(--c-border)":c.qrColor+"25"}`,
                  fontFamily: isNomad?"DM Sans, sans-serif":"Orbitron, monospace",
                  letterSpacing: isNomad?"0.02em":"0.1em" }}>
                  {c.year}
                </span>
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize:"0.75rem", fontWeight:700, color: isNomad?c.color:c.qrColor,
                    display:"flex", alignItems:"center", gap:4, opacity:0.8, transition:"opacity 0.18s",
                    fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif", letterSpacing:"0.04em" }}
                  onMouseEnter={e=>(e.currentTarget.style.opacity="1")}
                  onMouseLeave={e=>(e.currentTarget.style.opacity="0.8")}>
                  <ExternalLink size={11} />
                  {isNomad ? "View" : "VERIFY"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width:900px) { .cert-grid-override { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:600px) { .cert-grid-override { grid-template-columns:1fr !important; } }
      `}} />
    </section>
  );
}
