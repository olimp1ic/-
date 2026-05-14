"use client";

// Placeholder images from Unsplash — замените на свои фото проектов
const projects = [
  {
    id: 1,
    title: "ЖК Nice Loft",
    category: "Фактура — Капля · 3500 м² · COLDY",
    year: "2025",
    size: "large",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&fit=crop",
  },
  {
    id: 2,
    title: "ЖК M-5",
    category: "Фактура — Капля · 2400 м² · Садовое кольцо",
    year: "2025",
    size: "normal",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80&fit=crop",
  },
  {
    id: 3,
    title: "ЖК Level Мичуринский",
    category: "Американка · 3000 м² · LEVEL",
    year: "2024",
    size: "normal",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&fit=crop",
  },
  {
    id: 4,
    title: "ЖК Wave",
    category: "Песчаник и Капля · 13600 м² · ЛСР",
    year: "2024",
    size: "large",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#b8a070]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a070] font-light">
                Наши работы
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
            >
              Портфолио
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#5a5a5a] hover:text-[#b8a070] transition-colors duration-300 group"
          >
            Обсудить проект
            <span className="h-px w-8 bg-current group-hover:w-14 transition-all duration-500" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden aspect-[4/3] ${
                project.size === "large" ? "md:col-span-2 aspect-[16/7]" : ""
              }`}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75"
              />

              {/* Dark overlay base */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#080808]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] tracking-[0.35em] uppercase text-[#b8a070] mb-2 font-light">
                      {project.category}
                    </span>
                    <h3
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                      className="text-2xl md:text-3xl font-light text-white"
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[#5a5a5a] text-sm font-light">{project.year}</span>
                </div>
              </div>

              {/* Hover — view button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-3 border border-white/40 text-white text-[10px] tracking-[0.3em] uppercase font-light">
                  Смотреть
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
