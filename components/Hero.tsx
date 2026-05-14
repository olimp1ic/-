"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered reveal on load
    const els = heroRef.current?.querySelectorAll("[data-hero]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 300 + i * 180);
    });
  }, []);

  const heroStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(35px)",
    transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184,160,112,0.07) 0%, rgba(184,160,112,0.02) 40%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner decorative lines */}
      <div className="absolute top-24 left-8 md:left-16 w-px h-20 bg-gradient-to-b from-transparent via-[#b8a070]/40 to-transparent" />
      <div className="absolute top-24 left-8 md:left-16 h-px w-20 bg-gradient-to-r from-transparent via-[#b8a070]/40 to-transparent" />
      <div className="absolute bottom-20 right-8 md:right-16 w-px h-20 bg-gradient-to-b from-transparent via-[#b8a070]/40 to-transparent" />
      <div className="absolute bottom-20 right-8 md:right-16 h-px w-20 bg-gradient-to-r from-transparent via-[#b8a070]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div data-hero style={heroStyle} className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-[#b8a070]/60" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#b8a070] font-light">
            Премиальные интерьеры
          </span>
          <div className="h-px w-12 bg-[#b8a070]/60" />
        </div>

        {/* Main headline */}
        <h1
          data-hero
          style={{
            ...heroStyle,
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
          }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] text-white mb-4"
        >
          Искусство
        </h1>
        <h1
          data-hero
          style={{
            ...heroStyle,
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
          }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] italic text-[#b8a070] mb-4"
        >
          покрытий
        </h1>
        <h1
          data-hero
          style={{
            ...heroStyle,
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
          }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] text-white mb-16"
        >
          &amp; поверхностей
        </h1>

        {/* Description */}
        <p
          data-hero
          style={heroStyle}
          className="text-base md:text-lg font-light text-[#7a7a7a] leading-relaxed max-w-xl mx-auto mb-12 tracking-wide"
        >
          Микроцемент, декоративная штукатурка и авторские покрытия.
          <br className="hidden md:block" />
          Создаём пространства, которые говорят о вашем статусе.
        </p>

        {/* CTAs */}
        <div data-hero style={heroStyle} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-10 py-4 bg-[#b8a070] text-[#080808] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#d4ba8a] transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Оставить заявку</span>
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 border border-white/20 text-white text-[11px] tracking-[0.3em] uppercase font-light hover:border-white/50 transition-all duration-300"
          >
            Наши работы
          </a>
        </div>

        {/* Scroll indicator */}
        <div data-hero style={heroStyle} className="mt-20 flex flex-col items-center gap-3 opacity-40">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#7a7a7a]">Листать</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#7a7a7a] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
