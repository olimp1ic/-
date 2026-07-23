"use client";

const services = [
  {
    num: "01",
    title: "Штукатурка и гипсокартон",
    desc: "Выравниваем стены и потолки механизированной штукатуркой, монтируем конструкции из ГКЛ. Полная подготовка объекта с нуля.",
  },
  {
    num: "02",
    title: "Базовая шпаклёвка",
    desc: "Выводим поверхности под финишную отделку. Ровная геометрия и подготовленное основание под покраску или декоративный слой.",
  },
  {
    num: "03",
    title: "Безвоздушная покраска",
    desc: "Красим стены и потолки промышленными окрасочными станциями. Равномерный слой без полос и наплывов, высокая скорость на больших объёмах.",
  },
  {
    num: "04",
    title: "Декоративная штукатурка",
    desc: "Работаем с любыми фактурами — от популярных до авторских. Карта мира, американка, капля, арт-бетон, песчаник, шёлк и другие по вашему образцу или проекту.",
  },
];

// ────────────────────────────────────────────────────────────
// Фото фактур лежат в /public/images/textures/
// Имя файла = slug + .jpg  (например karta-mira.jpg)
// Если файла нет — карточка остаётся тёмной с названием.
// ────────────────────────────────────────────────────────────
const textures = [
  { name: "Карта мира", slug: "karta-mira" },
  { name: "Американка", slug: "amerikanka" },
  { name: "Капля", slug: "kaplya" },
  { name: "Арт-бетон", slug: "art-beton" },
  { name: "Песчаник", slug: "peschanik" },
  { name: "Шёлк", slug: "shelk" },
];


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
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-[#1c1c1c] leading-tight"
            >
              Перечень работ
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-[#7a7a7a] font-light leading-relaxed text-right">
            Закрываем весь цикл отделки — от голых стен до финишного покрытия.
          </p>
        </div>

        {/* Grid — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4d3cf]">
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
              Примеры фактур
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {textures.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${(i % 6) + 1} group relative overflow-hidden aspect-square bg-[#1c1c1c]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/textures/${t.slug}.jpg`}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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

          <p className="mt-6 md:mt-8 text-sm text-[#7a7a7a] font-light leading-relaxed max-w-2xl">
            Это лишь часть работ. Выполним любую фактуру по образцу, каталогу
            производителя или дизайн-проекту.
          </p>
        </div>

      </div>
    </section>
  );
}
