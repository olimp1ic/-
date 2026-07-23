"use client";

// ────────────────────────────────────────────────────────────
// Чтобы добавить своё фото объекта:
// 1. Положи файл в папку /public/images/objects/
// 2. Пропиши имя файла в поле img (например "/images/objects/wave.jpg")
// Пока файла нет — показывается заглушка с названием.
// ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "ЖК Wave",
    texture: "Песчаник · Капля",
    developer: "ЛСР",
    img: "/images/objects/wave.jpg",
  },
  {
    id: 2,
    title: "ЖК Level Мичуринский",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/level-michurinsky.jpg",
  },
  {
    id: 3,
    title: "ЖК Nice Loft",
    texture: "Арт-бетон",
    developer: "COLDY",
    img: "/images/objects/niceloft.jpg",
  },
  {
    id: 4,
    title: "ЖК Варшавские Ворота",
    texture: "Карта мира",
    developer: "RG-Девелопмент",
    img: "/images/objects/warsaw.jpg",
  },
  {
    id: 5,
    title: "ЖК Level Южнопортовая",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/level-yuzhnoportovaya.jpg",
  },
  {
    id: 6,
    title: "ЖК Саввинский 17",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/savvinsky.jpg",
  },
  {
    id: 7,
    title: "ЖК М-5",
    texture: "Капля",
    developer: "Садовое кольцо",
    img: "/images/objects/m5.jpg",
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
                Наши работы
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
            Объекты в Москве и области, где мы наносили декоративные покрытия.
          </p>
        </div>

        {/* Grid — 6 objects, 1 photo each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden aspect-[4/5] bg-[#1c1c1c]`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={`${p.title} — ${p.texture}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // если фото ещё не добавлено — прячем битую картинку
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />

              {/* Заглушка (видна, когда фото нет) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-[#3a3a3a] text-2xl font-light tracking-wide"
                >
                  {p.title}
                </span>
              </div>

              {/* Затемнение снизу */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/85 via-[#1c1c1c]/10 to-transparent" />
              <div className="absolute inset-0 bg-[#1c1c1c]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Подпись */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="block text-[10px] tracking-[0.3em] uppercase text-[#b0afa9] mb-2 font-light">
                  {p.texture}{p.developer ? ` · ${p.developer}` : ""}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-2xl font-light text-white leading-tight"
                >
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
