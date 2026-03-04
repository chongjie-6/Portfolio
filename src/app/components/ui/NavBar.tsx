"use client";
import { useEffect, useState } from "react";
import { Links } from "./Links";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full hidden md:block z-20 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f4f0]/95 backdrop-blur-sm border-b border-stone-300 shadow-sm"
          : "bg-[#f5f4f0] border-b border-stone-300"
      }`}
    >
      <div className="nav max-w-6xl">
        <p className="font-mono text-xs tracking-widest uppercase select-none text-stone-800 font-medium">
          CJ
        </p>
        <div className="flex items-center gap-8">
          <Links />
        </div>
      </div>
    </nav>
  );
}