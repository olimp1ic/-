const services = [
  {
    num: "01",
    title: "Механизированное нанесение",
    desc: "Наносим декоративную штукатурку и шпаклёвку машинным способом. Работаем быстрее ручного нанесения и держим ровный слой на больших площадях.",
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

const textures = [
  "Карта мира",
  "Американка",
  "Капля",
  "Арт-бетон",
  "Песчаник",
  "Шёлк",
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-12 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#1c1c1c]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                Что мы делаем
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1c1c1c] leading-tight"
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
              className={`reveal reveal-delay-${i + 1} group relative bg-[#f5f4f2] hover:bg-[#eeede9] p-10 md:p-14 overflow-hidden cursor-default transition-colors duration-500`}
            >
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#1c1c1c] group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-px h-0 bg-[#b0afa9] group-hover:h-full transition-all duration-700 delay-100" />

              <span
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="block text-[80px] md:text-[100px] font-light text-[#e8e7e3] group-hover:text-[#d4d3cf] leading-none mb-6 select-none transition-colors duration-500"
              >
                {svc.num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="text-3xl md:text-4xl font-light text-[#1c1c1c] mb-4 leading-tight"
              >
                {svc.title}
              </h3>

              <p className="text-sm text-[#7a7a7a] group-hover:text-[#5a5a5a] font-light leading-relaxed transition-colors duration-500">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Textures row */}
        <div className="mt-2 bg-[#1c1c1c] px-8 md:px-14 py-10 md:py-12 reveal">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#b0afa9] font-light whitespace-nowrap">
              Наши фактуры
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {textures.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-2xl md:text-3xl font-light text-[#f5f4f2] hover:text-[#b0afa9] transition-colors duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
