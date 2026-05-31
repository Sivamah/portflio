"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sivamah25@gmail.com",
    href: "mailto:sivamah25@gmail.com",
    color: "var(--c-primary)",
    bg: "var(--c-primary-soft)",
    border: "rgba(108,99,255,0.15)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9345560972",
    href: "tel:+919345560972",
    color: "var(--c-accent)",
    bg: "var(--c-accent-soft)",
    border: "rgba(0,212,255,0.15)",
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/siva-subramanian-m-129a92320", color: "#0077b5", id: "contact-linkedin" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Sivamah", color: "#333", id: "contact-github" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const theme = useTheme();
  const isNature = theme === "nature";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--c-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div className="blob" style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)",
        top: -100,
        right: -100,
        zIndex: 0,
      }} />
      <div className="blob" style={{
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(255,107,157,0.05) 0%, transparent 70%)",
        bottom: 0,
        left: 0,
        zIndex: 0,
      }} />

      <div ref={ref} className="section" style={{ position: "relative", zIndex: 1 }}>
        {/* Hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="section-label" style={{ justifyContent: "center", display: "inline-flex", marginBottom: 16 }}>
            <span>✉️</span>
            Get In Touch
          </div>
          <h2 className="text-section-title font-display" style={{ marginBottom: 16 }}>
            Let&apos;s Build <span className="gradient-text">Something Amazing</span> Together
          </h2>
          <p style={{
            fontSize: "1.05rem",
            color: "var(--c-text-2)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.75,
          }}>
            Whether you&apos;re looking to hire, collaborate, or just say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Contact cards */}
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  id={`contact-info-${item.label.toLowerCase()}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "20px 24px",
                    background: "var(--c-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: `1px solid ${item.border}`,
                    boxShadow: "var(--shadow-card)",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--c-text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "var(--c-text-1)", fontWeight: 600 }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                padding: "20px 24px",
                background: "var(--c-surface)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--c-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <p style={{ fontSize: "0.72rem", color: "var(--c-text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                Social Profiles
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={s.id}
                      whileHover={{ scale: 1.08, y: -3 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 16px",
                        borderRadius: 12,
                        background: "var(--c-surface-2)",
                        border: "1px solid var(--c-border-soft)",
                        color: s.color,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                    >
                      <Icon size={16} />
                      {s.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(108,99,255,0.06), rgba(255,107,157,0.04))",
                border: "1px solid rgba(108,99,255,0.12)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--c-text-1)" }}>
                    Open to Opportunities
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--c-text-2)", marginTop: 2 }}>
                    Internships, full-time roles, and collaborations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: "var(--c-surface)",
              borderRadius: "var(--radius)",
              padding: 40,
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif", marginBottom: 24 }}>
              Send a Message
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  padding: 40,
                  textAlign: "center",
                }}
              >
                <CheckCircle size={52} style={{ color: "#10b981" }} />
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--c-text-1)", fontFamily: "Sora, sans-serif" }}>
                  Message Sent!
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--c-text-2)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--c-text-2)", display: "block", marginBottom: 6 }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                    required
                    id="contact-name-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--c-text-2)", display: "block", marginBottom: 6 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                    required
                    id="contact-email-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--c-text-2)", display: "block", marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Hi Siva, I'd love to discuss..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input"
                    required
                    id="contact-message-input"
                    style={{ resize: "vertical", minHeight: 120 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  id="contact-send-btn"
                  style={{ width: "100%", justifyContent: "center", padding: "16px" }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
