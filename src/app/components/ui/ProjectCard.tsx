import { useEffect, useState } from "react";
import { CarouselComponent } from "./CarouselComponent";
import Link from "next/link";

export default function ProjectCard({
  index,
  title,
  images,
  link,
  description,
  skills,
}: {
  index: string;
  title: string;
  images: Array<{ src: string; description: string }>;
  link: string;
  description: string;
  skills: Array<string>;
}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(`project-${title}`);
      if (!el) return;
      if (window.scrollY + window.innerHeight > el.offsetTop + el.offsetHeight - 300) {
        setInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <li
      id={`project-${title}`}
      className={`list-item transition-opacity duration-700 ${
        inView ? "animate-slide-in-right" : "opacity-0"
      }`}
    >
      {/* Row header: index + title */}
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-xs tracking-widest text-stone-400">
          {index}
        </span>
        <div className="list-title">
          {link ? (
            <Link
              href={link}
              className="project_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{title}</h2>
              <span className="text-sm text-stone-400">↗</span>
            </Link>
          ) : (
            <h2>{title}</h2>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden rounded-sm bg-stone-200">
        <CarouselComponent photos={images} />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed max-w-xl text-stone-600">
        {description}
      </p>

      {/* Skills */}
      <div className="skills_section">
        {skills.map((tech) => (
          <span key={tech} className="skills_tab">
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
}