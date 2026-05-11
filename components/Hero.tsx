'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden"
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties
      }
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 60%, #C9A96E18, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 20%, #C9A96E08, transparent 60%)',
        }}
      />

      {/* Static radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none animate-glow"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, #C9A96E12, transparent 70%)',
        }}
      />

      {/* Vertical label */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold" />
        <span
          className="font-body text-[10px] tracking-widest uppercase text-mid"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.3em' }}
        >
          Premium Surfaces
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[9px] tracking-widest uppercase text-mid">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up opacity-0-init">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-[10px] tracking-widest uppercase text-gold">
            Москва · Декоративные покрытия
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-light leading-[0.9] mb-10">
          <span className="block text-[clamp(3.5rem,10vw,9rem)] text-ivory animate-fade-up opacity-0-init delay-100">
            Интерьеры,
          </span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)] text-ivory animate-fade-up opacity-0-init delay-200">
            которые
          </span>
          <span
            className="block text-[clamp(3.5rem,10vw,9rem)] italic text-gold animate-fade-up opacity-0-init delay-300"
          >
            останавливают
          </span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)] text-ivory animate-fade-up opacity-0-init delay-400">
            взгляд.
          </span>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-body font-light text-mid text-base md:text-lg max-w-md leading-relaxed animate-fade-up opacity-0-init delay-500">
            Микроцемент, декоративная штукатурка и авторские покрытия для жилых и коммерческих
            пространств. Работаем с архитекторами и частными заказчиками.
          </p>
          <div className="flex items-center gap-6 animate-fade-up opacity-0-init delay-600">
            <a
              href="#contact"
              className="btn-gold border border-gold px-8 py-4 text-xs tracking-widest uppercase text-gold font-body whitespace-nowrap"
            >
              <span>Оставить заявку</span>
            </a>
            <a
              href="#portfolio"
              className="font-body text-xs tracking-widest uppercase text-mid hover:text-ivory transition-colors duration-300 whitespace-nowrap flex items-center gap-2"
            >
              <span>Портфолио</span>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M0 4H13M13 4L9.5 0.5M13 4L9.5 7.5" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
