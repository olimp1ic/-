const stats = [
  { value: "8+", label: "лет на рынке" },
  { value: "340", label: "проектов завершено" },
  { value: "100%", label: "клиентов рекомендуют" },
  { value: "12", label: "специалистов в команде" },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: text */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#b8a070]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a070] font-light">
                О компании
              </span>
            </div>

            
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl leading-[0.95] font-light tracking-[-0.03em] text-[#1f1f1f] mb-10"
            >
              Механизированное нанесение декоративных покрытий премиального уровня
            </h2>

            <p className="text-[#555] text-[15px] leading-[2] max-w-xl mb-6">
              Наше механизированное нанесение позволяет безупречно выполнять сложные фактуры на объектах любой площади — от элитных апартаментов до масштабных коммерческих пространств.
            </p>

            <p className="text-[#555] text-[15px] leading-[2] max-w-xl">
              Благодаря отработанной технологии и команде специалистов с большим практическим опытом, мы гарантируем идеальное качество на каждом этапе — от подготовки основания до финишного декоративного покрытия. Используем промышленное оборудование и премиальные материалы для реализации современных дизайнерских решений с безупречной геометрией и долговечностью.
            </p>

          </div>

            <div className="mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-[#b8a070] text-[#080808] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#d4ba8a] transition-colors duration-300"
              >
                Начать проект
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-[#2a2a2a] to-transparent" />
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-[#1e1e1e] reveal reveal-delay-2">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#080808] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#0f0f0f] transition-colors duration-500"
              >
                <span
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-5xl md:text-6xl font-light text-white group-hover:text-[#b8a070] transition-colors duration-500 leading-none mb-4"
                >
                  {stat.value}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#5a5a5a] font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
