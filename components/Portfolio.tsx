'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';

const projects = [
  {
    id: 1,
    title: 'Резиденция в Остоженке',
    type: 'Микроцемент · Жилой',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    span: 'md:col-span-2',
    height: 'h-[480px]',
  },
  {
    id: 2,
    title: 'Penthouse в Москва-Сити',
    type: 'Декоративная штукатурка · Жилой',
    year: '2024',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    span: '',
    height: 'h-[480px]',
  },
  {
    id: 3,
    title: 'Ресторан Epoch',
    type: 'Отделка под ключ · Коммерческий',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    span: '',
    height: 'h-[480px]',
  },
  {
    id: 4,
    title: 'Лофт на Красном Октябре',
    type: 'Микроцемент · Жилой',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    span: 'md:col-span-2',
    height: 'h-[480px]',
  },
];

export default function Portfolio() {
  const sectionRef = useReveal();

  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 md:px-12 bg-graphite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          ref={sectionRef as React.RefObject<HTMLDivElement>}
        >
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-widest uppercase text-gold">
                Избранные работы
              </span>
            </div>
            <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight text-ivory reveal reveal-delay-1">
              Портфолио
            </h2>
          </div>
          <div className="flex items-center gap-2 reveal reveal-delay-2">
            <span className="font-body text-[10px] tracking-widest uppercase text-dim">
              Более 80 реализованных объектов
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`portfolio-item relative overflow-hidden group cursor-pointer ${p.span} ${p.height} reveal reveal-delay-${i + 1}`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hover overlay */}
              <div className="overlay absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-body text-[10px] tracking-widest uppercase text-gold block mb-3">
                    {p.type} · {p.year}
                  </span>
                  <h3 className="font-display text-2xl font-light text-ivory">{p.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-mid text-xs font-body tracking-widest uppercase">
                    <span>Смотреть проект</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M0 4H13M13 4L9.5 0.5M13 4L9.5 7.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner marker */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-ivory/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-16 flex justify-center reveal">
          <a
            href="#contact"
            className="font-body text-xs tracking-widest uppercase text-mid hover:text-gold transition-colors duration-300 flex items-center gap-3 border-b border-muted pb-1"
          >
            <span>Обсудить ваш проект</span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0 4H13M13 4L9.5 0.5M13 4L9.5 7.5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
