"use client";

// img — временные фото Unsplash. Замените на /images/jk-wave.jpg и т.д. после загрузки своих фото
const projects = [
  {
    id: 1,
    title: "ЖК Wave",
    desc: "Фактура Песчаник + Капля",
    meta: "8 600 + 5 000 м²  ·  Застройщик ЛСР",
    large: true,
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80&fit=crop",
  },
  {
    id: 2,
    title: "ЖК Nice Loft",
    desc: "Фактура Капля",
    meta: "3 500 м²  ·  Застройщик COLDY",
    large: false,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fit=crop",
  },
  {
    id: 3,
    title: "ЖК Nice Loft — Ледовая арена",
    desc: "Фактура Бетон",
    meta: "3 500 м²  ·  Застройщик COLDY",
    large: false,
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&fit=crop",
  },
  {
    id: 4,
    title: "ЖК Level Мичуринский",
    desc: "Фактура Американка",
    meta: "3 000 м²  ·  Застройщик LEVEL",
    large: false,
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80&fit=crop",
  },
  {
    id: 5,
    title: "ЖК М-5",
    desc: "Фактура Капля",
    meta: "2 400 м²  ·  Застройщик Садовое кольцо",
    large: false,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop",
  },
  {
    id: 6,
    title: "ЖК Level Южнопортовая",
    desc: "Фактура Американка",
    meta: "2 100 м²  ·  Застройщик LEVEL",
    large: true,
    img: "https://images.unsplash.com/photo-1600210491892-03d54f1b7f9a?w=1400&q=80&fit=crop",
  },
  {
    id: 7,
    title: "ЖК City Park",
    desc: "Фактура АртБетон",
    meta: "1 400 м²  ·  Застройщик Монарх",
    large: false,
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&fit=crop",
  },
  {
    id: 8,
    title: "ЖК Саввинский 17",
    desc: "Фактура Американка",
    meta: "400 м²  ·  Застройщик LEVEL",
    large: false,
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8" style={{ background: "var(--heading)" }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: "var(--body)" }}>
                Реализованные объекты
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
            >
              Объекты
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm font-light leading-relaxed text-right" style={{ color: "var(--mid)" }}>
            Крупнейшие ЖК Москвы и области. Тысячи квадратных метров каждый год.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden
                ${p.large ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Base gradient */}
              <div className="absolute inset-0"
                   style={{ background: "linear-gradient(to top, rgba(28,28,28,.75) 0%, transparent 55%)" }} />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "rgba(28,28,28,.55)" }} />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="block text-[10px] tracking-[0.35em] uppercase font-light mb-1.5"
                          style={{ color: "rgba(212,211,207,0.85)" }}>
                      {p.desc}
                    </span>
                    <h3
                      style={{ fontFamily: "var(--font-cormorant)", color: "#fff" }}
                      className="text-2xl md:text-3xl font-light"
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span className="hidden sm:block text-xs font-light text-right shrink-0 leading-relaxed"
                        style={{ color: "rgba(176,175,169,0.8)" }}>
                    {p.meta}
                  </span>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-3 border border-white/40 text-white text-[10px] tracking-[0.3em] uppercase font-light">
                  Подробнее
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
