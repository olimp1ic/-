"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            className="text-2xl font-light tracking-[0.15em] text-white group-hover:text-[#b8a070] transition-colors duration-500"
          >
            СМАРТ ДЕКОР
          </span>
          <span className="text-[10px] font-light tracking-[0.4em] text-[#7a7a7a] mt-0.5 uppercase">
            Interior &amp; Decor
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.3em] uppercase text-[#a0a0a0] hover:text-[#b8a070] transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 border border-[#b8a070]/60 text-[11px] tracking-[0.25em] uppercase text-[#b8a070] hover:bg-[#b8a070] hover:text-[#080808] transition-all duration-300 font-light"
          >
            Заявка
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#0f0f0f]/98 backdrop-blur-md ${
          menuOpen ? "max-h-96 border-b border-white/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[0.3em] uppercase text-[#a0a0a0] hover:text-[#b8a070] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-3 border border-[#b8a070]/60 text-[11px] tracking-[0.25em] uppercase text-[#b8a070] text-center hover:bg-[#b8a070] hover:text-[#080808] transition-all duration-300"
          >
            Оставить заявку
          </a>
        </nav>
      </div>
    </header>
  );
}
