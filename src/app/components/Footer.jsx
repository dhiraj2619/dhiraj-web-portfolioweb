"use client";

import React from "react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (event, href) => {
    if (!href?.startsWith("#")) return;

    const section = document.getElementById(href.slice(1));
    if (!section) return;

    event.preventDefault();
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#da8161]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#d9a100]/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1900px] px-6 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              Let&apos;s Build Something Strong
            </p>
            <h2 className="mt-3 text-4xl font-brokmannsemibold leading-none sm:text-6xl md:text-7xl">
              Dhiraj<span className="text-[#d9a100]">.</span>
            </h2>
          </div>

         
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleSectionClick(event, link.href)}
                    className="text-base text-white/85 transition hover:text-[#d9a100]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-base text-white/85">
              <a
                href="mailto:dhirajbhirud2699@gmail.com"
                className="block transition hover:text-[#d9a100]"
              >
                dhirajbhirud2699@gmail.com
              </a>
              <a
                href="tel:+918421438615"
                className="block transition hover:text-[#d9a100]"
              >
                +91 84214 38615
              </a>
              <p>Nashik, Maharashtra, India</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-base text-white/85">
              <li>Web Development</li>
              <li>App Development</li>
              <li>E-commerce Solutions</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Availability
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Open for freelance projects and long-term product collaborations.
            </p>
            <a
              href="#contact"
              onClick={(event) => handleSectionClick(event, "#contact")}
              className="mt-4 inline-flex rounded-full bg-[#d9a100] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#efb000]"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p className="text-center">&copy; {currentYear} Dhiraj R. Bhirud. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
