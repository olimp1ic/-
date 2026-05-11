'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-6 h-6 border border-gold flex items-center justify-center">
            <div className="w-2 h-2 bg-gold" />
          </div>
          <span className="font-display text-lg tracking-widest uppercase text-ivory">
            Смарт<span className="text-gold"> Декор</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-body text-xs tracking-widest uppercase text-mid hover:text-ivory transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-gold border border-gold px-6 py-2.5 text-xs tracking-widest uppercase text-gold font-body"
        >
          <span>Оставить заявку</span>
        </a>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span
            className={`block w-6 h-px bg-ivory transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ivory transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-4 h-px bg-gold transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2 w-6' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        } bg-graphite`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs tracking-widest uppercase text-mid hover:text-ivory transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex self-start border border-gold px-6 py-3 text-xs tracking-widest uppercase text-gold font-body"
          >
            Оставить заявку
          </a>
        </nav>
      </div>
    </header>
  );
}
