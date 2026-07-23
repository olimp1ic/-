"use client";

// ────────────────────────────────────────────────────────────
// Чтобы добавить своё фото объекта:
// 1. Положи файл в папку /public/images/objects/
// 2. Пропиши имя файла в поле img (например "/images/objects/wave.png")
// Формат: логотип ЖК на прозрачном фоне (PNG) или на белом. Показывается
// по центру карточки. Пока файла нет — выводится название текстом.
// ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "ЖК Wave",
    texture: "Песчаник · Капля",
    developer: "ЛСР",
    img: "/images/objects/wave.png",
  },
  {
    id: 2,
    title: "ЖК Level Мичуринский",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/level-michurinsky.png",
  },
  {
    id: 3,
    title: "ЖК Nice Loft",
    texture: "Арт-бетон",
    developer: "COLDY",
    img: "/images/objects/niceloft.png",
  },
  {
    id: 4,
    title: "ЖК Варшавские Ворота",
    texture: "Карта мира",
    developer: "RG-Девелопмент",
    img: "/images/objects/warsaw.png",
  },
  {
    id: 5,
    title: "ЖК Level Южнопортовая",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/level-yuzhnoportovaya.png",
  },
  {
    id: 6,
    title: "ЖК Саввинский 17",
    texture: "Американка",
    developer: "LEVEL",
    img: "/images/objects/savvinsky.png",
  },
  {
    id: 7,
    title: "ЖК М-5",
    texture: "Капля",
    developer: "Садовое кольцо",
    img: "/images/objects/m5.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-40 px-5 md:px-12 bg-[#eeede9]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#1c1c1c]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                Наши работы
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1c1c1c] leading-tight"
            >
              Объекты
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-[#7a7a7a] font-light leading-relaxed text-right">
            Объекты в Москве и области, где мы наносили декоративные покрытия.
          </p>
        </div>

        {/* Grid — логотипы ЖК */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-[#f5f4f2] hover:bg-white border border-[#d4d3cf] transition-all duration-500 flex flex-col`}
            >
              {/* Логотип ЖК */}
              <div className="h-24 md:h-32 flex items-center justify-center p-5 md:p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const ph = el.nextElementSibling as HTMLElement | null;
                    if (ph) ph.style.display = "block";
                  }}
                />
                {/* Заглушка, если логотипа ещё нет */}
                <span
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                    display: "none",
                  }}
                  className="text-[#b0afa9] text-lg md:text-xl font-light text-center leading-tight"
                >
                  {p.title}
                </span>
              </div>

              {/* Подпись */}
              <div className="px-4 md:px-6 pb-5 md:pb-6 pt-1 border-t border-[#e8e7e3] mt-auto">
                <h3 className="text-[12px] md:text-sm font-normal text-[#1c1c1c] leading-snug mb-1.5 pt-4">
                  {p.title}
                </h3>
                <span className="block text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-[#7a7a7a] font-light leading-relaxed">
                  {p.texture}{p.developer ? ` · ${p.developer}` : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
