"use client";
import { useState } from "react";

// ────────────────────────────────────────────────────────────
// ЛОГОТИПЫ ЖК
// Положи файл в /public/images/objects/ с именем из поля slug.
// Расширение подбирается автоматически: .png → .jpg → .jpeg → .webp
// Например для slug "wave" подойдёт wave.png ИЛИ wave.jpg
// Пока файла нет — выводится название текстом.
// ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "ЖК Wave",
    texture: "Песчаник · Капля",
    developer: "ЛСР",
    slug: "wave",
  },
  {
    id: 2,
    title: "ЖК Level Мичуринский",
    texture: "Американка",
    developer: "LEVEL",
    slug: "level-michurinsky",
  },
  {
    id: 3,
    title: "ЖК Nice Loft",
    texture: "Арт-бетон",
    developer: "COLDY",
    slug: "niceloft",
  },
  {
    id: 4,
    title: "ЖК Варшавские Ворота",
    texture: "Карта мира",
    developer: "RG-Девелопмент",
    slug: "warsaw",
  },
  {
    id: 5,
    title: "ЖК Level Южнопортовая",
    texture: "Американка",
    developer: "LEVEL",
    slug: "level-yuzhnoportovaya",
  },
  {
    id: 6,
    title: "ЖК Саввинский 17",
    texture: "Американка",
    developer: "LEVEL",
    slug: "savvinsky",
  },
  {
    id: 7,
    title: "ЖК М-5",
    texture: "Капля",
    developer: "Садовое кольцо",
    slug: "m5",
  },
];


// Подбирает расширение файла автоматически
const EXTS = ["png", "jpg", "jpeg", "webp"];

function LogoImage({ slug, title }: { slug: string; title: string }) {
  const [idx, setIdx] = useState(0);
  const failed = idx >= EXTS.length;

  if (failed) {
    return (
      <span
        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
        className="text-[#b0afa9] text-base md:text-xl font-light text-center leading-tight"
      >
        {title}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/objects/${slug}.${EXTS[idx]}`}
      alt={title}
      className="max-h-full max-w-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-500"
      onError={() => setIdx((n) => n + 1)}
    />
  );
}

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
                <LogoImage slug={p.slug} title={p.title} />
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
