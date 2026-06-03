const services = [
  {
    num: "01",
    title: "Фактурные штукатурки",
    desc: "Капля, американка, песчаник, бетон — механизированное нанесение обеспечивает идеальную геометрию и однородность фактуры на любой площади.",
    tags: ["Капля", "Американка", "Песчаник", "АртБетон"],
  },
  {
    num: "02",
    title: "Декоративный бетон",
    desc: "Имитация бетонных поверхностей с промышленной эстетикой. Бесшовное покрытие для стен, колонн и фасадных зон — без компромиссов по качеству.",
    tags: ["Микробетон", "Арт-бетон", "Фасады"],
  },
  {
    num: "03",
    title: "Механизированное нанесение",
    desc: "Промышленное оборудование позволяет работать на объектах от 400 до 8 600 м². Скорость и равномерность недостижимы ручным способом.",
    tags: ["От 400 м²", "До 8 600 м²", "ЖК / Коммерция"],
  },
  {
    num: "04",
    title: "Отделка под ключ",
    desc: "Полный цикл — от подготовки основания до финишного покрытия. Работаем с крупными застройщиками: LEVEL, ЛСР, COLDY, Монарх, Садовое кольцо.",
    tags: ["Подготовка", "Грунтование", "Финиш"],
  },
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
            Каждый объект — индивидуальная задача. Шаблонов не существует.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4d3cf]">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group relative bg-[#f5f4f2] hover:bg-[#eeede9] p-10 md:p-14 overflow-hidden cursor-default transition-colors duration-500`}
            >
              {/* Hover lines */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#1c1c1c] group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-px h-0 bg-[#b0afa9] group-hover:h-full transition-all duration-700 delay-100" />

              {/* Big number */}
              <span
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="block text-[80px] md:text-[100px] font-light text-[#e8e7e3] group-hover:text-[#d4d3cf] leading-none mb-6 select-none transition-colors duration-500"
              >
                {svc.num}
              </span>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="text-3xl md:text-4xl font-light text-[#1c1c1c] mb-4"
              >
                {svc.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#7a7a7a] group-hover:text-[#5a5a5a] font-light leading-relaxed mb-8 transition-colors duration-500">
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.25em] uppercase text-[#b0afa9] border border-[#d4d3cf] group-hover:border-[#5a5a5a]/30 group-hover:text-[#5a5a5a] px-3 py-1 transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
