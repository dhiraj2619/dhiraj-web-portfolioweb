"use client";

import React from "react";

const navItems = ["Studio", "Projects", "Newspaper", "Contact"];

const Navbar = () => {
  return (
    <header className="w-full border-y-2 bg-white">
      <nav className="mx-auto flex h-[74px] max-w-[1900px] items-center justify-between px-4 md:px-8">
        <a
          href="#"
          className="mr-10 text-[38px] font-black leading-none tracking-tight"
        >
          apertus<span className="text-[#d9a100]">.</span>
        </a>

        <ul className="hidden flex-1 items-center justify-evenly md:flex">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <a
                href="#"
                className="text-[34px] font-medium leading-none tracking-tight text-black"
              >
                {item}
              </a>

              {item === "Contact" && (
                <span className="pointer-events-none absolute -left-6 -top-7 h-[66px] w-[66px] rounded-full border-2 border-black">
                  <span className="absolute right-[18px] top-[14px] h-2.5 w-2.5 rounded-full bg-black" />
                </span>
              )}
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          className="ml-auto flex h-10 w-12 flex-col justify-center gap-2"
        >
          <span className="block h-[3px] w-full bg-black" />
          <span className="block h-[3px] w-full bg-black" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
