"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Menu, X, Home, User, Map, FolderOpen, Zap, Award, FileText, MessageSquare, Download, ChevronRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { id: "home",           label: "Home",           qrLabel: "HOME",           icon: Home },
  { id: "about",          label: "About",          qrLabel: "ABOUT",          icon: User },
  { id: "journey",        label: "Journey",        qrLabel: "THE ROUTE",      icon: Map },
  { id: "projects",       label: "Projects",       qrLabel: "COMMAND CTR",    icon: FolderOpen },
  { id: "skills",         label: "Skills",         qrLabel: "TECH ARSENAL",   icon: Zap },
  { id: "certifications", label: "Certifications", qrLabel: "ACHIEVEMENTS",   icon: Award },
  { id: "resume",         label: "Resume",         qrLabel: "BRIEFING",       icon: FileText },
  { id: "contact",        label: "Contact",        qrLabel: "CONNECT",        icon: MessageSquare },
];

function SidebarContent({ active, onNav }: { active: string; onNav: (id: string) => void }) {
  const theme = useTheme();
  const isNomad = theme === "nomad";

  return (
    <>
      {/* Logo */}
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20, padding:"0 4px" }}>
        <div className="sidebar-logo">
          {isNomad
            ? <span style={{ fontFamily:"Playfair Display, serif", fontSize:"0.88rem", fontWeight:700, fontStyle:"italic" }}>S</span>
            : <span style={{ fontFamily:"Orbitron, monospace", fontSize:"0.68rem", fontWeight:900 }}>QR</span>}
        </div>
        <div>
          <p style={{ fontSize:"0.82rem", fontWeight:700, color:"var(--c-text-1)", fontFamily:isNomad?"DM Sans, sans-serif":"Orbitron, monospace", lineHeight:1.2, letterSpacing:isNomad?"0":"0.05em" }}>
            {isNomad ? "Siva M" : "SIVA M"}
          </p>
          <p style={{ fontSize:"0.62rem", color:"var(--c-text-3)", marginTop:2, fontFamily:isNomad?"DM Sans, sans-serif":"Space Grotesk, sans-serif", letterSpacing:isNomad?"0.02em":"0.07em", textTransform:isNomad?"none":"uppercase" }}>
            {isNomad ? "CSE Student" : "CSE STUDENT"}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height:1, background:"var(--c-border)", marginBottom:8 }} />

      {/* Nav */}
      <nav className="sidebar-nav" style={{ position:"relative" }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const label = isNomad ? item.label : item.qrLabel;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNav(item.id)}
              whileHover={{ x:isNomad ? 3 : 2 }}
              whileTap={{ scale:0.97 }}
              className={`nav-item ${isActive ? "active-motion" : ""}`}
              style={{ position:"relative", zIndex:1, background:"transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-bg"
                  style={{
                    position:"absolute", inset:0,
                    background: isNomad ? "var(--g-primary)" : "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                    borderRadius: isNomad ? "8px" : "8px",
                    zIndex:-1,
                    boxShadow: isNomad ? "0 2px 8px rgba(22,58,99,0.2)" : "0 0 16px rgba(59,130,246,0.4)",
                  }}
                  transition={{ type:"spring", bounce:0.2, duration:0.5 }}
                />
              )}
              <Icon className="nav-icon" style={{ color:isActive ? "white" : "inherit" }} />
              <span style={{ color:isActive ? "white" : "inherit", fontWeight:isActive ? 600 : 500 }}>{label}</span>
              {isActive && !isNomad && (
                <ChevronRight size={10} style={{ marginLeft:"auto", color:"rgba(255,255,255,0.5)" }} />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Download Resume */}
      <motion.a
        href="/resume.pdf.pdf"
        download
        whileHover={{ scale:1.02 }}
        whileTap={{ scale:0.98 }}
        style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:8,
          padding:"10px", borderRadius:8,
          background: isNomad ? "var(--c-primary)" : "linear-gradient(135deg,#3B82F6,#8B5CF6)",
          color:"white", fontSize:"0.76rem", fontWeight:700,
          fontFamily: isNomad ? "DM Sans, sans-serif" : "Space Grotesk, sans-serif",
          letterSpacing: isNomad ? "0.02em" : "0.08em",
          textTransform: isNomad ? "none" : "uppercase",
          marginTop:12,
          boxShadow: isNomad ? "0 2px 8px rgba(22,58,99,0.2)" : "0 4px 16px rgba(59,130,246,0.35)",
          textDecoration:"none",
        }}
        id="sidebar-resume-download"
      >
        <Download size={13} />
        {isNomad ? "Download Resume" : "Download Resume"}
      </motion.a>

      {/* Socials */}
      <div className="sidebar-socials">
        <a href="https://github.com/Sivamah" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub" id="sidebar-github">
          <FaGithub size={14} />
        </a>
        <a href="https://www.linkedin.com/in/siva-subramanian-m-129a92320" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" id="sidebar-linkedin">
          <FaLinkedinIn size={14} />
        </a>
        <a href="mailto:sivamah25@gmail.com" className="social-btn" aria-label="Email" id="sidebar-email">
          <Mail size={14} />
        </a>
      </div>

      {/* Theme signature */}
      <div style={{ marginTop:14, padding:"8px 10px", borderRadius:6, background:"var(--c-surface-2)", border:"1px solid var(--c-border)" }}>
        <p style={{ fontFamily:isNomad?"DM Sans, sans-serif":"Orbitron, monospace", fontSize:"0.52rem", color:"var(--c-text-3)", letterSpacing:isNomad?"0.06em":"0.12em", textAlign:"center", textTransform:"uppercase" }}>
          {isNomad ? "🏛️ The Nomad's Board" : "♟️ QUANTUM ROOK v1.0"}
        </p>
      </div>
    </>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => n.id);
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive:true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" id="mobile-menu-btn">
        {mobileOpen ? <X size={18} style={{ color:"var(--c-text-1)" }} /> : <Menu size={18} style={{ color:"var(--c-text-1)" }} />}
      </button>

      <aside className="sidebar" style={{ display:"flex" }}>
        <SidebarContent active={active} onNav={handleNav} />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)", backdropFilter:"blur(4px)", zIndex:105 }}
              onClick={() => setMobileOpen(false)} />
            <motion.aside
              initial={{ x:-280 }} animate={{ x:0 }} exit={{ x:-280 }}
              transition={{ type:"spring", damping:28, stiffness:320 }}
              className="sidebar open"
              style={{ display:"flex", zIndex:110 }}
            >
              <SidebarContent active={active} onNav={handleNav} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
