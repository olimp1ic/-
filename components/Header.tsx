"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const nav = [
  { label: "Работы",   href: "#services"  },
  { label: "Объекты",  href: "#portfolio" },
  { label: "О нас",    href: "#about"     },
  { label: "Контакты", href: "#contact"   },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#f5f4f2]/95 backdrop-blur-md border-b border-[#d4d3cf]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 md:gap-3.5 group">
          <Logo className="w-7 md:w-9 h-auto text-[#1c1c1c] group-hover:text-[#5a5a5a] transition-colors duration-500 flex-shrink-0" />
          <div className="flex flex-col leading-none">
            <span
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-lg md:text-2xl font-light tracking-[0.12em] md:tracking-[0.15em] text-[#1c1c1c] group-hover:text-[#5a5a5a] transition-colors duration-500 whitespace-nowrap"
            >
              СМАРТ ДЕКОР
            </span>
            <span className="text-[8px] md:text-[10px] font-light tracking-[0.25em] md:tracking-[0.4em] text-[#b0afa9] mt-0.5 uppercase whitespace-nowrap">
              Декоративные покрытия
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.3em] uppercase text-[#7a7a7a] hover:text-[#1c1c1c] transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 border border-[#1c1c1c]/60 text-[11px] tracking-[0.25em] uppercase text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#f5f4f2] transition-all duration-300 font-light"
          >
            Заявка
          </a>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block h-px w-6 bg-[#1c1c1c] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-[#1c1c1c] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#1c1c1c] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-[#f5f4f2]/98 backdrop-blur-md ${open ? "max-h-96 border-b border-[#d4d3cf]" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 py-8 gap-6">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[12px] tracking-[0.3em] uppercase text-[#7a7a7a] hover:text-[#1c1c1c] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-6 py-3 border border-[#1c1c1c]/60 text-[11px] tracking-[0.25em] uppercase text-[#1c1c1c] text-center hover:bg-[#1c1c1c] hover:text-[#f5f4f2] transition-all duration-300"
          >
            Оставить заявку
          </a>
        </nav>
      </div>
    </header>
  );
}
