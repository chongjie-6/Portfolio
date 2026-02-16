import Image from "next/image";
import { useEffect, useState } from "react";

const SKILLS = [
  { name: "React",       logo: "/react_logo.svg" },
  { name: "Next.js",     logo: "/nextjs_logo.svg" },
  { name: "TypeScript",  logo: "/typescript_logo.svg" },
  { name: "JavaScript",  logo: "/javascript-icon.svg" },
  { name: "TailwindCSS", logo: "/tailwindcss-icon.svg" },
  { name: "Node.js",     logo: "/nodejs-icon.svg" },
  { name: "Express.js",  logo: "/expressjs-logo.svg" },
  { name: "Supabase",    logo: "/supabase-logo-icon.svg" },
  { name: "HTML5",       logo: "/html5-logo.svg" },
  { name: "CSS",         logo: "/css_logo.svg" },
];

export function About() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("about");
      if (!el) return;
      if (window.scrollY + window.innerHeight > el.offsetTop + 100) {
        setInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto" id="about">
      {/* Section label */}
      <div className="flex items-center gap-6 mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-stone-500">
          01 — About
        </span>
        <div className="flex-1 border-t border-stone-300" />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: bio */}
        <div
          className={`space-y-8 transition-opacity duration-700 ${
            inView ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl leading-tight text-stone-900"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Building with
            <br />
            <em>intention.</em>
          </h2>

          <p className="text-sm leading-relaxed max-w-sm text-stone-600">
            Hi, I&apos;m Chongjie — an aspiring full-stack developer with a
            strong interest in building scalable and clean software. Whether
            working in a team or independently, I&apos;m constantly seeking
            challenges that push the boundaries of my current skillset.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-stone-300">
            {[
              { num: "4+", label: "Projects shipped" },
              { num: "10+", label: "Technologies" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="text-3xl text-stone-900 mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {num}
                </p>
                <p className="font-mono text-xs tracking-wider uppercase text-stone-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: skills grid */}
        <div
          className={`transition-opacity duration-700 delay-150 ${
            inView ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-8 text-stone-500">
            Technologies
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 border border-stone-300">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 p-4 bg-[#f5f4f0] hover:bg-stone-200 border-r border-b border-stone-300 transition-colors duration-150 cursor-default"
              >
                <Image
                  src={skill.logo}
                  width={20}
                  height={20}
                  alt={skill.name}
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-150"
                />
                <span className="text-xs font-mono tracking-wide text-stone-600 group-hover:text-stone-900 transition-colors duration-150">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}