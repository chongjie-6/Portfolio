"use client";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { MobileNav } from "@/components/ui/mobileNav";
import { NavBar } from "@/components/ui/navBar";
import { Projects } from "@/components/ui/projects";
import { ArrowRight, Briefcase, ChevronDown, Mail } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      className="bg-black/20 text-gray-100 space-y-15 md:space-y-50"
      id="home"
    >
      {/* Hero Section */}
      <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        {/* Desktop Navigation */}
        <NavBar />

        {/* Mobile Navigation */}
        <MobileNav />

        <div className="flex flex-col items-center gap-12 z-10 relative max-w-6xl mx-auto md:pt-60 pt-30">
          <div className="text-center space-y-10">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 select-none typewriter py-1">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Chongjie
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              I craft engaging digital experiences with modern technologies.
              <span className="text-blue-400 font-semibold">
                {" "}
                Let&apos;s build something amazing together.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-103 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <Briefcase size={20} />
                <span>View My Work</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-medium rounded-full transition-all duration-300 transform hover:scale-103 hover:bg-white/5 flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Hero image/avatar */}
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="hidden w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900 sm:flex items-center justify-center text-blue-500 text-6xl font-bold">
              C
            </div>
            <div className="animate-bounce">
              <ChevronDown size={64} className="text-gray-400" />
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
