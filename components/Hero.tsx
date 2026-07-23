"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-hero]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 300 + i * 180);
    });
  }, []);

  const s: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(35px)",
    transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f4f2]">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(46,46,46,0.04) 0%, transparent 70%)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(46,46,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(46,46,46,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Corner lines */}
      <div className="absolute top-24 left-8 md:left-16 w-px h-20 bg-gradient-to-b from-transparent via-[#b0afa9] to-transparent" />
      <div className="absolute top-24 left-8 md:left-16 h-px w-20 bg-gradient-to-r from-transparent via-[#b0afa9] to-transparent" />
      <div className="absolute bottom-20 right-8 md:right-16 w-px h-20 bg-gradient-to-b from-transparent via-[#b0afa9] to-transparent" />
      <div className="absolute bottom-20 right-8 md:right-16 h-px w-20 bg-gradient-to-r from-transparent via-[#b0afa9] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-6 max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <div data-hero style={s} className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          <div className="h-px w-6 md:w-12 bg-[#b0afa9] flex-shrink-0" />
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.5em] uppercase text-[#7a7a7a] font-light text-center">
            Механизированное нанесение
          </span>
          <div className="h-px w-6 md:w-12 bg-[#b0afa9] flex-shrink-0" />
        </div>

        {/* Headlines */}
        <h1 data-hero style={{ ...s, fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
          className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] md:leading-[0.9] tracking-[-0.02em] text-[#1c1c1c] mb-2 md:mb-4">
          Декоративные
        </h1>
        <h1 data-hero style={{ ...s, fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
          className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] md:leading-[0.9] tracking-[-0.02em] italic text-[#5a5a5a] mb-2 md:mb-4">
          покрытия
        </h1>
        <h1 data-hero style={{ ...s, fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
          className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] md:leading-[0.9] tracking-[-0.02em] text-[#1c1c1c] mb-10 md:mb-16">
          и штукатурка
        </h1>

        {/* Description */}
        <p data-hero style={s}
          className="text-sm md:text-lg font-light text-[#7a7a7a] leading-relaxed max-w-xl mx-auto mb-10 md:mb-12 tracking-wide px-2">
          Механизированное нанесение декоративной штукатурки и шпаклёвки.
          <br className="hidden md:block" />
          Разные фактуры под жилые и коммерческие объекты.
        </p>

        {/* CTAs */}
        <div data-hero style={s} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <a href="#contact"
            className="px-8 md:px-10 py-4 bg-[#1c1c1c] text-[#f5f4f2] text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-[#2e2e2e] transition-all duration-300 text-center">
            Оставить заявку
          </a>
          <a href="#portfolio"
            className="px-8 md:px-10 py-4 border border-[#b0afa9] text-[#2e2e2e] text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:border-[#5a5a5a] transition-all duration-300 text-center">
            Наши объекты
          </a>
        </div>

        {/* Scroll */}
        <div data-hero style={s} className="mt-16 md:mt-20 flex flex-col items-center opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-[#7a7a7a] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
