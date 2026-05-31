"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Menu, X, Home, User, Map, FolderOpen, Zap, Award, FileText, MessageSquare, Leaf } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { id: "home",           label: "Home",           icon: Home },
  { id: "about",          label: "About",          icon: User },
  { id: "journey",        label: "Journey",        icon: Map },
  { id: "projects",       label: "Projects",       icon: FolderOpen },
  { id: "skills",         label: "Skills",         icon: Zap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "resume",         label: "Resume",         icon: FileText },
  { id: "contact",        label: "Contact",        icon: MessageSquare },
];

function SidebarContent({ active, onNav }: { active: string; onNav: (id: string) => void }) {
  const theme = useTheme();
  const isNature = theme === "nature";

  return (
    <>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "0 4px" }}>
        <div className="sidebar-logo" style={{
          background: isNature
            ? "linear-gradient(135deg, #6E8B60, #A67C52)"
            : "linear-gradient(135deg, #00E5FF, #8A2BE2)",
        }}>
          {isNature ? <Leaf size={16} color="white" /> : "S"}
        </div>
        <div>
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", lineHeight: 1.2 }}>
            Siva M
          </p>
          <p style={{
            fontSize: "0.7rem",
            color: "var(--c-text-3)",
            marginTop: 1,
            fontFamily: isNature ? "Lora, serif" : "Inter, sans-serif",
            fontStyle: isNature ? "italic" : "normal",
          }}>
            {isNature ? "Growing Engineer 🌱" : "CSE Student"}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--c-border)", marginBottom: 8 }} />

      {/* Nav */}
      <nav className="sidebar-nav" style={{ position: "relative" }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const label = isNature && item.id === "projects"
            ? "Garden"
            : isNature && item.id === "skills"
            ? "Ecosystem"
            : isNature && item.id === "certifications"
            ? "Milestones"
            : item.label;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNav(item.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className={`nav-item ${isActive ? "active-motion" : ""}`}
              style={{ position: "relative", zIndex: 1, background: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isNature
                      ? "linear-gradient(135deg, #6E8B60, #A67C52)"
                      : "linear-gradient(135deg, #00E5FF, #8A2BE2)",
                    borderRadius: isNature ? "12px" : "10px",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Icon className="nav-icon" style={{ color: isActive ? "white" : "inherit" }} />
              <span style={{ color: isActive ? "white" : "inherit", fontWeight: isActive ? 600 : 500 }}>
                {label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="sidebar-socials">
        <a href="https://github.com/Sivamah" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub" id="sidebar-github">
          <FaGithub size={15} />
        </a>
        <a href="https://www.linkedin.com/in/siva-subramanian-m-129a92320" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" id="sidebar-linkedin">
          <FaLinkedinIn size={15} />
        </a>
        <a href="mailto:sivamah25@gmail.com" className="social-btn" aria-label="Email" id="sidebar-email">
          <Mail size={15} />
        </a>
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
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" id="mobile-menu-btn">
        {mobileOpen
          ? <X size={19} style={{ color: "var(--c-text-1)" }} />
          : <Menu size={19} style={{ color: "var(--c-text-1)" }} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="sidebar" style={{ display: "flex" }}>
        <SidebarContent active={active} onNav={handleNav} />
      </aside>

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", zIndex: 105 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="sidebar open"
              style={{ display: "flex", zIndex: 110 }}
            >
              <SidebarContent active={active} onNav={handleNav} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
