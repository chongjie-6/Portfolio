import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-10 max-w-6xl mx-auto border-t border-stone-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <p className="font-mono text-xs tracking-widest text-stone-500">
          © 2026 Chongjie Chen
        </p>

        <div className="flex items-center gap-6 flex-wrap">
          {/* Resume download — place your resume PDF at /public/resume.pdf */}
          <a
            href="/resume.pdf"
            download="Chongjie_Chen_Resume.pdf"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-stone-900 border border-stone-900 px-4 py-2 hover:bg-stone-900 hover:text-[#f5f4f0] transition-all duration-200"
            aria-label="Download Chongjie Chen's resume as PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>

          <Link
            href="https://github.com/chongjie-6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors duration-200"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/chongjie-chen-838b8b306/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors duration-200"
          >
            LinkedIn ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}