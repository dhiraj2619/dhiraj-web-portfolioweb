"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { id: 1, linkName: "About", reachToSec: "#about" },
  { id: 2, linkName: "Services", reachToSec: "#services" },
  { id: 3, linkName: "Projects", reachToSec: "#projects" },
  { id: 4, linkName: "Contact", reachToSec: "#contact" },
];

const overlayItems = [
  { id: 1, linkName: "Home", reachToSec: "#home" },
  { id: 2, linkName: "About", reachToSec: "#about" },
  { id: 3, linkName: "Services", reachToSec: "#services" },
  { id: 4, linkName: "Projects", reachToSec: "#projects" },
  { id: 5, linkName: "Contact", reachToSec: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, reachToSec, shouldCloseMenu = false) => {
    if (!reachToSec?.startsWith("#")) return;

    const sectionId = reachToSec.slice(1);
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    event.preventDefault();

    const sectionTop =
      targetSection.getBoundingClientRect().top + window.scrollY;
    const offset = reachToSec === "#about" ? 700 : 0;

    window.scrollTo({
      top: sectionTop + offset,
      behavior: "smooth",
    });

    if (shouldCloseMenu) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative w-full bg-[#f7f6f2]">
      <nav className="relative z-40 mx-auto flex h-[74px] max-w-[1900px] items-center justify-between px-4 font-brokmannlight md:px-8">
        <a
          href="#"
          className="mr-10 text-[30px] sm:text-[34px] md:text-[38px] font-black leading-none tracking-tight"
        >
          Dhiraj<span className="text-[#d9a100]">.</span>
        </a>

        <ul
          className={`hidden flex-1 items-center justify-evenly md:flex ${
            isMenuOpen ? "pointer-events-none" : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="relative"
              style={{
                transition: "opacity 320ms ease, transform 320ms ease",
                transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                opacity: isMenuOpen ? 0 : 1,
                transform: isMenuOpen ? "translateY(-10px)" : "translateY(0px)",
              }}
            >
                <a
                  href={item.reachToSec}
                  onClick={(event) => handleNavClick(event, item.reachToSec)}
                  className="text-[15px] md:text-[16px] font-medium leading-none tracking-tight text-black"
                >
                  {item.linkName}
                </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-auto flex h-10 w-12 items-center justify-center"
        >
          <span className="relative block h-5 w-10">
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-[7px]"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-30 bg-[#efefef] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1900px] flex-col px-4 pt-[110px] pb-8 md:px-8">
          <ul className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
            {overlayItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  transition: "opacity 420ms ease, transform 420ms ease",
                  transitionDelay: isMenuOpen
                    ? `${220 + index * 70}ms`
                    : `${(overlayItems.length - 1 - index) * 30}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen
                    ? "translateY(0px)"
                    : "translateY(26px)",
                }}
              >
                <a
                  href={item.reachToSec}
                  onClick={(event) =>
                    handleNavClick(event, item.reachToSec, true)
                  }
                  className="text-[38px] py-4 md:py-5 font-semibold font-brokmannlight leading-[0.95] tracking-tight text-black sm:text-[50px] md:text-[60px]"
                >
                  {item.linkName}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="flex flex-wrap items-end justify-between gap-4 text-black"
            style={{
              transition: "opacity 380ms ease, transform 380ms ease",
              transitionDelay: isMenuOpen ? "420ms" : "0ms",
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateY(0px)" : "translateY(18px)",
            }}
          >
            <div>
              <p className="text-[18px] sm:text-[21px] md:text-[24px] font-medium leading-none">
                +91-8421438615
              </p>
              <a
                href="mailto:dhirajbhirud2699@gmail.com"
                className="mt-3 inline-block text-[20px] sm:text-[24px] md:text-[30px] font-semibold leading-none tracking-tight"
              >
                dhirajbhirud2699@gmail.com
              </a>
            </div>
            <p className="text-[18px] sm:text-[22px] md:text-[30px] font-medium leading-none">
              @2026 Dhiraj Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
