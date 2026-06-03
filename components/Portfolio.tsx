"use client";

const projects = [
  {
    id: 1,
    title: "ЖК Wave",
    category: "Песчаник + Капля",
    meta: "8 600 + 5 000 м²  ·  ЛСР",
    size: "large",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80&fit=crop",
  },
  {
    id: 2,
    title: "ЖК Nice Loft",
    category: "Фактура — Капля",
    meta: "3 500 м²  ·  COLDY",
    size: "normal",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fit=crop",
  },
  {
    id: 3,
    title: "ЖК Nice Loft — Ледовая арена",
    category: "Фактура — Бетон",
    meta: "3 500 м²  ·  COLDY",
    size: "normal",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&fit=crop",
  },
  {
    id: 4,
    title: "ЖК Level Мичуринский",
    category: "Фактура — Американка",
    meta: "3 000 м²  ·  LEVEL",
    size: "normal",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80&fit=crop",
  },
  {
    id: 5,
    title: "ЖК М-5",
    category: "Фактура — Капля",
    meta: "2 400 м²  ·  Садовое кольцо",
    size: "normal",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop",
  },
  {
    id: 6,
    title: "ЖК Level Южнопортовая",
    category: "Фактура — Американка",
    meta: "2 100 м²  ·  LEVEL",
    size: "large",
    img: "https://images.unsplash.com/photo-1600210491892-03d54f1b7f9a?w=1400&q=80&fit=crop",
  },
  {
    id: 7,
    title: "ЖК City Park",
    category: "Фактура — АртБетон",
    meta: "1 400 м²  ·  Монарх",
    size: "normal",
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80&fit=crop",
  },
  {
    id: 8,
    title: "ЖК Саввинский 17",
    category: "Фактура — Американка",
    meta: "400 м²  ·  LEVEL",
    size: "normal",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 md:px-12 bg-[#eeede9]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#1c1c1c]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                Реализованные объекты
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1c1c1c] leading-tight"
            >
              Объекты
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-[#7a7a7a] font-light leading-relaxed text-right">
            Крупнейшие ЖК Москвы и области. Сотни тысяч квадратных метров.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden ${
                p.size === "large" ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[#1c1c1c]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="block text-[10px] tracking-[0.35em] uppercase text-[#d4d3cf] mb-1.5 font-light">
                      {p.category}
                    </span>
                    <h3
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                      className="text-2xl md:text-3xl font-light text-white"
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-[#b0afa9] text-xs font-light text-right hidden sm:block leading-relaxed flex-shrink-0">
                    {p.meta}
                  </span>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-3 border border-white/50 text-white text-[10px] tracking-[0.3em] uppercase font-light">
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
