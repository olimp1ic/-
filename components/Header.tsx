"use client";
import { useState, useEffect } from "react";

const nav = [
  { label: "Услуги",   href: "#services"  },
  { label: "Объекты",  href: "#portfolio" },
  { label: "О нас",    href: "#about"     },
  { label: "Контакты", href: "#contact"   },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "border-b" : ""
      }`}
      style={{
        background: scrolled ? "rgba(245,244,242,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderColor: "var(--line)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-light tracking-[0.15em] transition-colors duration-500"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
          >
            СМАРТ ДЕКОР
          </span>
          <span className="text-[10px] font-light tracking-[0.4em] uppercase mt-0.5"
                style={{ color: "var(--muted)" }}>
            Декоративные покрытия
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {nav.map(l => (
            <a key={l.href} href={l.href}
               className="text-[11px] tracking-[0.3em] uppercase font-light transition-colors duration-300 hover:opacity-100"
               style={{ color: "var(--mid)" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--heading)")}
               onMouseLeave={e => (e.currentTarget.style.color = "var(--mid)")}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
             className="ml-4 px-6 py-2.5 border text-[11px] tracking-[0.25em] uppercase font-light transition-all duration-300"
             style={{ borderColor: "var(--heading)", color: "var(--heading)" }}
             onMouseEnter={e => {
               (e.currentTarget as HTMLElement).style.background = "var(--heading)";
               (e.currentTarget as HTMLElement).style.color      = "var(--bg-base)";
             }}
             onMouseLeave={e => {
               (e.currentTarget as HTMLElement).style.background = "transparent";
               (e.currentTarget as HTMLElement).style.color      = "var(--heading)";
             }}>
            Заявка
          </a>
        </nav>

        {/* Burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--heading)" }} />
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}               style={{ background: "var(--heading)" }} />
          <span className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--heading)" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 border-b" : "max-h-0"}`}
           style={{ background: "rgba(245,244,242,0.98)", backdropFilter: "blur(12px)", borderColor: "var(--line)" }}>
        <nav className="flex flex-col px-6 py-8 gap-6">
          {nav.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="text-[12px] tracking-[0.3em] uppercase font-light"
               style={{ color: "var(--mid)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
             className="mt-2 px-6 py-3 border text-[11px] tracking-[0.25em] uppercase font-light text-center transition-all duration-300"
             style={{ borderColor: "var(--heading)", color: "var(--heading)" }}>
            Оставить заявку
          </a>
        </nav>
      </div>
    </header>
  );
}
