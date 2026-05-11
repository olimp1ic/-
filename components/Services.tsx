'use client';

import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    number: '01',
    title: 'Декоративная штукатурка',
    description:
      'Венецианская, марморино, травертин, бетон — создаём уникальные фактуры ручной работы для жилых и коммерческих интерьеров.',
    tags: ['Венецианская', 'Мраморная', 'Бетон-эффект'],
  },
  {
    number: '02',
    title: 'Микроцемент',
    description:
      'Бесшовное покрытие для пола, стен и мебели. Водостойкое, прочное, с матовой или глянцевой финишной обработкой.',
    tags: ['Пол', 'Стены', 'Мебель'],
  },
  {
    number: '03',
    title: 'Интерьерный дизайн',
    description:
      'Авторские концепции для жилых пространств и коммерческих объектов. От идеи до чертежей и сопровождения реализации.',
    tags: ['Концепция', 'Чертежи', 'Авторский надзор'],
  },
  {
    number: '04',
    title: 'Отделка под ключ',
    description:
      'Комплексная реализация интерьера: от подготовки поверхностей до финальной уборки. Один договор, одна команда.',
    tags: ['Комплексно', 'Под ключ', 'Гарантия'],
  },
];

export default function Services() {
  const sectionRef = useReveal();

  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-12 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-widest uppercase text-gold">
                Что мы делаем
              </span>
            </div>
            <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight text-ivory reveal reveal-delay-1">
              Услуги
            </h2>
          </div>
          <p className="font-body font-light text-mid text-sm max-w-sm leading-relaxed reveal reveal-delay-2">
            Каждый проект — авторская работа. Используем только проверенные материалы европейских
            производителей.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`service-card bg-obsidian border border-transparent p-10 md:p-14 flex flex-col gap-6 cursor-default reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-[3.5rem] font-light leading-none text-muted">
                  {s.number}
                </span>
                <div className="w-6 h-6 border border-border flex items-center justify-center opacity-40 group-hover:border-gold group-hover:opacity-100 transition-all">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="#C9A96E"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-light text-ivory mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="font-body font-light text-mid text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] tracking-widest uppercase text-dim border border-muted px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
