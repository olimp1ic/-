"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.querySelectorAll<HTMLElement>("[data-h]").forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 170);
    });
  }, []);

  const s: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(32px)",
    transition: "opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1)",
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(rgba(46,46,46,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(46,46,46,.5) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner marks */}
      <div className="absolute top-24 left-8 md:left-16 w-px h-20"
           style={{ background: "linear-gradient(to bottom, transparent, var(--muted), transparent)" }} />
      <div className="absolute top-24 left-8 md:left-16 h-px w-20"
           style={{ background: "linear-gradient(to right, transparent, var(--muted), transparent)" }} />
      <div className="absolute bottom-20 right-8 md:right-16 w-px h-20"
           style={{ background: "linear-gradient(to bottom, transparent, var(--muted), transparent)" }} />
      <div className="absolute bottom-20 right-8 md:right-16 h-px w-20"
           style={{ background: "linear-gradient(to right, transparent, var(--muted), transparent)" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div data-h style={s} className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12" style={{ background: "var(--muted)" }} />
          <span className="text-[10px] tracking-[0.5em] uppercase font-light" style={{ color: "var(--mid)" }}>
            Механизированное нанесение
          </span>
          <div className="h-px w-12" style={{ background: "var(--muted)" }} />
        </div>

        {/* Headline */}
        <h1
          data-h
          style={{ ...s, fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] mb-4"
        >
          Декоративные
        </h1>
        <h1
          data-h
          style={{ ...s, fontFamily: "var(--font-cormorant)", color: "var(--mid)" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] italic mb-4"
        >
          покрытия
        </h1>
        <h1
          data-h
          style={{ ...s, fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-[-0.02em] mb-16"
        >
          любой площади
        </h1>

        {/* Description */}
        <p
          data-h
          style={{ ...s, color: "var(--mid)" }}
          className="text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12 tracking-wide"
        >
          Капля, американка, бетон, песчаник — от элитных апартаментов
          <br className="hidden md:block" />
          до крупных коммерческих пространств. Безупречно.
        </p>

        {/* CTA */}
        <div data-h style={s} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-light transition-colors duration-300 hover:opacity-80"
            style={{ background: "var(--heading)", color: "var(--bg-base)" }}
          >
            Оставить заявку
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 border text-[11px] tracking-[0.3em] uppercase font-light transition-colors duration-300 hover:opacity-70"
            style={{ borderColor: "var(--line)", color: "var(--body)" }}
          >
            Наши объекты
          </a>
        </div>

        {/* Scroll hint */}
        <div data-h style={{ ...s }} className="mt-20 flex flex-col items-center gap-3 opacity-30">
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--muted)" }}>
            Листать
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, var(--muted), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
