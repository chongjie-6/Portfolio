"use client";

import { About } from "./components/ui/About";
import { NavBar } from "./components/ui/NavBar";
import { MobileNav } from "./components/ui/MobileNav";
import { Projects } from "./components/ui/Projects";
import { Contact } from "./components/ui/Contact";
import { Footer } from "./components/ui/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="text-stone-900 bg-[#f5f4f0]" id="home">
      <NavBar />
      <MobileNav />

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 relative bg-[#f5f4f0]">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#c8c5bc 1px, transparent 1px), linear-gradient(90deg, #c8c5bc 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Index label */}
        <div className="absolute top-32 right-8 md:right-16 lg:right-24 text-right animate-fade-in [animation-delay:0.6s]">
          <p className="font-mono text-xs tracking-widest uppercase text-stone-500">
            Portfolio
          </p>
          <p className="font-mono text-xs tracking-widest text-stone-500">
            2025
          </p>
        </div>

        <div className="relative z-10 max-w-5xl">
          {/* Overline */}
          <p className="font-mono text-xs tracking-widest uppercase mb-8 text-stone-500 animate-fade-up [animation-delay:0.1s]">
            Full-Stack Developer
          </p>

          {/* Main heading */}
          <h1
            className="text-6xl md:text-8xl lg:text-[clamp(5rem,12vw,9rem)] leading-none mb-10 text-stone-900 animate-fade-up [animation-delay:0.2s]"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Chongjie
            <br />
            <em>Chen</em>
          </h1>

          {/* Divider */}
          <div className="w-16 border-t border-stone-900 mb-10 animate-fade-up [animation-delay:0.35s]" />

          {/* Sub copy + CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start animate-fade-up [animation-delay:0.45s]">
            <p className="text-sm leading-relaxed max-w-xs text-stone-600">
              Crafting scalable software with clean code and deliberate design.
            </p>

            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer group font-mono text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-2 text-stone-900 hover:text-stone-600"
              >
                View Work
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer font-mono text-xs tracking-widest uppercase transition-all duration-200 text-stone-500 hover:text-stone-900"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in [animation-delay:1s]">
          <div className="w-px h-12 bg-stone-300 animate-pulse" />
          <span className="font-mono text-xs tracking-widest uppercase text-stone-500">
            Scroll
          </span>
        </div>
      </main>

      {/* Sections */}
      <div className="space-y-32 md:space-y-48 bg-[#f5f4f0]">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}