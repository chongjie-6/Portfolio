import React from "react";
import { Links } from "./links";

export function NavBar() {
  return (
    <nav className="nav hidden md:flex pt-5">
      <p className="font-bold text-4xl select-none">Chongjie</p>
      <div className="space-x-10">
        <Links></Links>
      </div>
    </nav>
  );
}
