"use client";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Механизированное нанесение",
    desc: "Наносим декоративную штукатурку и шпаклёвку механизированным способом. Работаем быстрее ручного нанесения и держим ровный слой на больших площадях.",
  },
  {
    num: "02",
    title: "Декоративные фактуры",
    desc: "Делаем разные фактуры под задачу объекта: карта мира, американка, капля, арт-бетон, песчаник, шёлк. Подберём вариант под ваш интерьер.",
  },
  {
    num: "03",
    title: "Штукатурка и шпаклёвка",
    desc: "Готовим поверхность и наносим штукатурку и шпаклёвку под финишную отделку. От подготовки основания до готового покрытия.",
  },
];

// ────────────────────────────────────────────────────────────
// Фото фактур: положи файлы в /public/images/textures/ с именем из slug.
// Расширение подбирается автоматически: .png → .jpg → .jpeg → .webp
// Пока фото нет — карточка тёмная с названием.
// ────────────────────────────────────────────────────────────
const textures = [
  { name: "Карта мира", slug: "karta-mira" },
  { name: "Американка", slug: "amerikanka" },
  { name: "Капля", slug: "kaplya" },
  { name: "Арт-бетон", slug: "art-beton" },
  { name: "Песчаник", slug: "peschanik" },
  { name: "Шёлк", slug: "shelk" },
];


// Подбирает расширение файла автоматически
const EXTS = ["png", "jpg", "jpeg", "webp"];

function TextureImage({ slug, name }: { slug: string; name: string }) {
  const [idx, setIdx] = useState(0);
  if (idx >= EXTS.length) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/textures/${slug}.${EXTS[idx]}`}
      alt={`Фактура ${name}`}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      onError={() => setIdx((n) => n + 1)}
    />
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-40 px-5 md:px-12 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#1c1c1c]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                Что мы делаем
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1c1c1c] leading-tight"
            >
              Услуги
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-[#7a7a7a] font-light leading-relaxed text-right">
            Декоративные покрытия для жилых и коммерческих объектов.
          </p>
        </div>

        {/* Grid — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4d3cf]">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group relative bg-[#f5f4f2] hover:bg-[#eeede9] p-7 md:p-14 overflow-hidden cursor-default transition-colors duration-500`}
            >
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#1c1c1c] group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-px h-0 bg-[#b0afa9] group-hover:h-full transition-all duration-700 delay-100" />

              <span
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="block text-[56px] md:text-[100px] font-light text-[#e8e7e3] group-hover:text-[#d4d3cf] leading-none mb-4 md:mb-6 select-none transition-colors duration-500"
              >
                {svc.num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="text-2xl md:text-4xl font-light text-[#1c1c1c] mb-3 md:mb-4 leading-tight"
              >
                {svc.title}
              </h3>

              <p className="text-sm text-[#7a7a7a] group-hover:text-[#5a5a5a] font-light leading-relaxed transition-colors duration-500">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Textures — фото-сетка */}
        <div className="mt-12 md:mt-24 reveal">
          <div className="flex items-center gap-4 mb-6 md:mb-10">
            <div className="h-px w-8 bg-[#1c1c1c]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
              Наши фактуры
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {textures.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${(i % 6) + 1} group relative overflow-hidden aspect-square bg-[#1c1c1c]`}
              >
                <TextureImage slug={t.slug} name={t.name} />
                {/* Затемнение */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-transparent to-transparent" />
                {/* Название */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                    className="text-lg md:text-xl font-light text-white"
                  >
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
