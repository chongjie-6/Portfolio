"use client";
import { useState } from "react";
import { Links } from "./Links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed md:hidden block z-20 w-full bg-[#f5f4f0] ${open ? "" : "border-b border-stone-300"}`}>
      {/* Top bar */}
      <div
        className={`px-6 py-5 flex justify-between items-center ${open ? "border-b border-stone-300" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="font-mono text-xs tracking-widest uppercase select-none text-stone-900">
          CJ
        </p>

        {/* Animated hamburger */}
        <div className="flex flex-col gap-1.5 cursor-pointer w-6">
          <span
            className="block h-px w-full bg-stone-900 transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
          />
          <span
            className={`block h-px w-full bg-stone-900 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className="block h-px w-full bg-stone-900 transition-all duration-300 origin-center"
            style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }}
          />
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-[#f5f4f0] ${open ? "max-h-64" : "max-h-0"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          <Links />
        </div>
      </div>
    </nav>
  );
}