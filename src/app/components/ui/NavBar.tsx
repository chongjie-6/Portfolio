import { Links } from "./Links";

export function NavBar() {
  return (
    <nav className="fixed w-full hidden md:block z-20 py-6 bg-[#f5f4f0] border-b border-stone-300">
      <div className="nav max-w-6xl">
        <p className="font-mono text-xs tracking-widest uppercase select-none text-stone-600">
          CJ
        </p>
        <div className="flex items-center gap-8">
          <Links />
        </div>
      </div>
    </nav>
  );
}