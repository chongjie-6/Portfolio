"use client";
import { useState } from "react";
import { Links } from "./links";

export function MobileNav() {
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <nav className="md:hidden pt-5 ">
      <div
        className="px-5 flex justify-between items-center"
        onClick={handleClick}
      >
        <p className="font-bold text-4xl select-none">Chongjie</p>
        {!clicked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        )}
      </div>

      {/* Drop down of the Hamburger Menu  */}
      <div className={`flex-col ${clicked ? "flex" : "hidden"} mt-5`}>
        <Links></Links>
      </div>
    </nav>
  );
}
