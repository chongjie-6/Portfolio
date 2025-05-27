import Image from "next/image";
import { useEffect, useState } from "react";

const SKILLS = [
  { name: "CSS", logo: "/css_logo.svg", color: "from-blue-500 to-blue-600" },
  {
    name: "HTML5",
    logo: "/html5-logo.svg",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Supabase",
    logo: "/supabase-logo-icon.svg",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Express.js",
    logo: "/expressjs-logo.svg",
    color: "from-gray-600 to-gray-700",
  },
  {
    name: "JavaScript",
    logo: "/javascript-icon.svg",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "TailwindCSS",
    logo: "/tailwindcss-icon.svg",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    logo: "/nodejs-icon.svg",
    color: "from-green-600 to-green-700",
  },
  {
    name: "Next.js",
    logo: "/nextjs_logo.svg",
    color: "from-gray-800 to-black",
  },
  {
    name: "TypeScript",
    logo: "/typescript_logo.svg",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "React",
    logo: "/react_logo.svg",
    color: "from-cyan-400 to-blue-500",
  },
];

export function About() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (!element) return;

      const elementBottom = element.offsetTop + element.offsetHeight + 100;
      const scrollY = window.scrollY + window.innerHeight;

      if (scrollY > elementBottom) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto mt-5 flex flex-col items-center space-y-20 w-full">
      <h2 id="about" className="text-6xl font-bold">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 px-5 w-full max-w-6xl items-center">
        {/* Text Section */}
        <div
          className={`flex flex-col items-center text-base space-y-5 flex-1 ${
            !inView && "invisible"
          } ${inView && "animate-slide-in-right"}`}
          id="text-section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>

          <div className="text-left max-w-prose">
            <p className="text-balance text-xl font-medium">
              Hi, I&apos;m Chongjie — an aspiring full-stack developer with a
              strong interest in building scalable and clean software solutions.
              Whether working in a team or independently, I&apos;m constantly
              learning and improving with a keen interest in seeking out
              challenges that push the boundaries of my current skillset.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div
          className={`text-center space-y-10 text-3xl font-semibold ${
            !inView && "invisible"
          } ${inView && "animate-slide-in-left"} `}
        >
          <h3>Technology I&apos;ve Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={skill.logo}
                      width={48}
                      height={48}
                      className="group-hover:scale-110 transition-transform duration-300"
                      alt={`${skill.name} logo`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
