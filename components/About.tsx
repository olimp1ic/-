const stats = [
  { value: "6",       label: "видов фактур" },
  { value: "8+",      label: "объектов сдано" },
  { value: "28 000",  label: "м² нанесено" },
  { value: "ЖК",      label: "и коммерция" },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left: text */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#1c1c1c]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                О компании
              </span>
            </div>

            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl font-light text-[#1c1c1c] leading-tight mb-8"
            >
              О компании
            </h2>

            <div className="space-y-5 text-[#7a7a7a] font-light leading-relaxed text-base">
              <p>
                Мы занимаемся декоративными покрытиями: наносим штукатурку и шпаклёвку
                механизированным способом на жилых и коммерческих объектах.
              </p>
              <p>
                Делаем разные фактуры — карта мира, американка, капля, арт-бетон, песчаник,
                шёлк. Работаем как на больших площадях в новостройках, так и на отдельных
                помещениях.
              </p>
              <p>
                Используем профессиональное оборудование и качественные материалы.
                Отвечаем за результат на каждом этапе — от подготовки основания до финишного
                покрытия.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-[#1c1c1c] text-[#f5f4f2] text-[11px] tracking-[0.25em] uppercase font-light hover:bg-[#2e2e2e] transition-colors duration-300"
              >
                Оставить заявку
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-[#d4d3cf] to-transparent" />
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-[#d4d3cf] reveal reveal-delay-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#f5f4f2] hover:bg-[#eeede9] p-10 md:p-12 flex flex-col justify-between transition-colors duration-500 group"
              >
                <span
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-4xl md:text-5xl font-light text-[#1c1c1c] leading-none mb-4"
                >
                  {s.value}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#7a7a7a] font-light">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
