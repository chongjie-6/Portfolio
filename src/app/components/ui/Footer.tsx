import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-10 max-w-6xl mx-auto border-t border-stone-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="font-mono text-xs tracking-widest text-stone-500">
          © 2025 Chongjie Chen
        </p>

        <div className="flex items-center gap-6">
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