"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content shifted right on desktop */}
      <div
        style={{
          marginLeft: "var(--sidebar-w)",
        }}
        className="main-wrapper"
      >
        <main>
          <Hero />
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Certifications />
          <Experience />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .main-wrapper {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
