import Image from "next/image";
import { useEffect, useState } from "react";
export function About() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (!element) return;

      const elementBottom = element.offsetTop + element.offsetHeight - 300;
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
    <div
      className="mx-auto mt-5 flex flex-col items-center space-y-20 w-full"
      id="about"
    >
      <h2 className="text-6xl font-bold">About <span className="text-blue-500">Me</span></h2>

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
        <div className="gap-10 inline-flex items-center">
          <div
            className={`space-y-5 ${!inView && "invisible"} ${
              inView && "animate-fall-up"
            }`}
          >
            <Image
              src={"/css_logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="CSS logo"
            />
            <Image
              src={"/expressjs-logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="ExpressJS Logo"
            />
            <Image
              src={"/nodejs-icon.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="NodeJS Logo"
            />
          </div>

          <div
            className={`space-y-5 ${!inView && "invisible"} ${
              inView && "animate-fall-down"
            }`}
          >
            <Image
              src={"/html5-logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="HTML5 Logo"
            />
            <Image
              src={"/javascript-icon.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="JavaScript Logo"
            />
            <Image
              src={"/nextjs_logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="NextJS Logo"
            />
            <Image
              src={"/react_logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="React Logo"
            />
          </div>

          <div
            className={`space-y-5 ${!inView && "invisible"} ${
              inView && "animate-fall-up"
            }`}
          >
            <Image
              src={"/supabase-logo-icon.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="Supabase Logo"
            />
            <Image
              src={"/tailwindcss-icon.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="TailwindCSS Logo"
            />
            <Image
              src={"/typescript_logo.svg"}
              width={500}
              height={500}
              className="w-32 h-32"
              alt="TypeScript Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
