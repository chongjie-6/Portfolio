import { useEffect, useState } from "react";
import { CarouselComponent } from "./carousel_component";
import Link from "next/link";

export default function ProjectCard({
  title,
  images,
  link,
  description,
  skills,
}: {
  title: string;
  images: Array<{ src: string; description: string }>;
  link: string;
  description: string;
  skills: Array<string>;
}) {
  const [project, setProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const project = document.getElementById(`${title}`);

      if (project) {
        const elementBottom = project.offsetTop + project.offsetHeight - 400;
        const scrollY = window.scrollY + window.innerHeight;

        if (scrollY > elementBottom) {
          setProject(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <li
      className={`list-item ${project && `animate-slide-in-right`} ${
        !project && `invisible`
      }`}
      id={`${title}`}
    >
      <CarouselComponent photos={images}></CarouselComponent>

      <div className="list-description">
        <div className="list-title">
          {link ? (
            <Link href={`${link}`} className="flex items-center project_link">
              <h2>{title}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center project_link">
              <h2>{title}</h2>
            </div>
          )}
        </div>
        <p>{description}</p>
        <div className="skills_section">
          {skills.map((tech, index) => (
            <p key={index} className="skills_tab">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
}
