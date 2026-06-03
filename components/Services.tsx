const services = [
  {
    num: "01",
    title: "Фактурные штукатурки",
    desc: "Капля, американка, песчаник, арт-бетон — механизированное нанесение обеспечивает идеальную геометрию и однородность фактуры на любой площади. Работаем с ведущими производителями материалов.",
    tags: ["Капля", "Американка", "Песчаник", "АртБетон"],
  },
  {
    num: "02",
    title: "Декоративный бетон",
    desc: "Имитация индустриального бетона с безупречной пластикой поверхности. Стены, колонны, фасадные зоны — единая фактура без стыков и переходов.",
    tags: ["Микробетон", "Арт-бетон", "Фасады", "Колонны"],
  },
  {
    num: "03",
    title: "Механизированное нанесение",
    desc: "Промышленные агрегаты позволяют работать на объектах от 400 до 8 600 м² без потери качества. Скорость и равномерность, недостижимые ручным способом.",
    tags: ["От 400 м²", "До 8 600 м²", "ЖК", "Коммерция"],
  },
  {
    num: "04",
    title: "Отделка под ключ",
    desc: "Полный цикл — от подготовки и грунтования основания до финишного покрытия. Гарантируем соблюдение сроков и бюджета. Работаем с LEVEL, ЛСР, COLDY, Монарх.",
    tags: ["Подготовка", "Грунтование", "Финиш", "Сдача"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8" style={{ background: "var(--heading)" }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: "var(--body)" }}>
                Что мы делаем
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
            >
              Услуги
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm font-light leading-relaxed text-right" style={{ color: "var(--mid)" }}>
            Каждый объект — индивидуальная задача. Шаблонных решений не бывает.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--line)" }}>
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group relative p-10 md:p-14 overflow-hidden cursor-default transition-colors duration-500`}
              style={{ background: "var(--bg-base)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-alt)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-base)")}
            >
              {/* Hover bottom line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "var(--heading)" }}
              />

              {/* Big number */}
              <span
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--line)" }}
                className="block text-[80px] md:text-[100px] font-light leading-none mb-6 select-none transition-colors duration-500"
              >
                {svc.num}
              </span>

              <h3
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
                className="text-3xl md:text-4xl font-light mb-4"
              >
                {svc.title}
              </h3>

              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "var(--mid)" }}>
                {svc.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {svc.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 border transition-all duration-500"
                    style={{ color: "var(--muted)", borderColor: "var(--line)" }}
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
