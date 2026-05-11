'use client';

import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: '9', label: 'Лет на рынке' },
  { value: '80+', label: 'Реализованных объектов' },
  { value: '12', label: 'Мастеров в команде' },
  { value: '100%', label: 'Проектов сдано в срок' },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: text */}
          <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-widest uppercase text-gold">
                О компании
              </span>
            </div>
            <h2 className="font-display font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-ivory mb-10 reveal reveal-delay-1">
              Детали,{' '}
              <span className="italic text-gold">которые</span>
              <br />
              имеют значение
            </h2>
            <div className="space-y-6 reveal reveal-delay-2">
              <p className="font-body font-light text-mid text-base leading-loose">
                Смарт Декор — команда профессиональных отделочников и дизайнеров, специализирующихся
                на декоративных покрытиях премиум-класса. Мы работаем с частными заказчиками,
                архитектурными бюро и застройщиками по всей России.
              </p>
              <p className="font-body font-light text-mid text-base leading-loose">
                Наш подход: никаких компромиссов в материалах, никаких отступлений от проекта.
                Каждая поверхность — результат ручного труда мастеров с многолетним опытом работы
                с европейскими технологиями.
              </p>
            </div>

            <div className="mt-12 reveal reveal-delay-3">
              <a
                href="#contact"
                className="btn-gold border border-gold px-8 py-4 text-xs tracking-widest uppercase text-gold font-body inline-flex"
              >
                <span>Обсудить проект</span>
              </a>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-border reveal reveal-delay-2">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-obsidian p-10 flex flex-col justify-between min-h-[160px] border border-transparent hover:border-gold/30 transition-colors duration-300"
              >
                <span className="font-display text-[3rem] md:text-[3.5rem] font-light text-ivory leading-none">
                  {s.value}
                </span>
                <span className="font-body text-xs text-dim tracking-wide uppercase leading-relaxed">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-32">
        <hr className="hr-gold" />
      </div>
    </section>
  );
}
