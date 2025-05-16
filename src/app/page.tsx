"use client";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { MobileNav } from "@/components/ui/mobileNav";
import { NavBar } from "@/components/ui/navBar";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 space-y-15 md:space-y-50"
      id="home"
    >
      {/* Desktop Navigation */}
      <NavBar />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Hero Section */}
      <main className="px-4 max-w-6xl mx-auto md:py-60">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
              Hi, I&apos;m <span className="text-blue-500">Chongjie</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg text-balance">
              I craft engaging digital experiences with modern technologies.
              Let&apos;s build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                </svg>
                View My Work
              </div>
              <div
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer px-6 py-3 bg-gray-700 hover:bg-gray-600 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                Get In Touch
              </div>
            </div>
          </div>

          {/* Hero image/avatar */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 text-6xl font-bold">
              C
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <About></About>

      {/* Projects Section */}
      <Projects></Projects>

      {/* Contact Me Section */}
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
