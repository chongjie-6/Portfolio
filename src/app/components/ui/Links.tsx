"use client";
import { useEffect, useState } from "react";

export function Links() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 100;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`relative cursor-pointer px-0 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-200 ${
            activeId === id
              ? "text-stone-900"
              : "text-stone-500 hover:text-stone-800"
          }`}
          aria-current={activeId === id ? "page" : undefined}
        >
          {label}
          {/* Active underline indicator */}
          <span
            className={`absolute bottom-0 left-0 h-px bg-stone-900 transition-all duration-300 ${
              activeId === id ? "w-full" : "w-0"
            }`}
          />
        </button>
      ))}
    </>
  );
}