const stats = [
  { value: "6",       label: "видов фактур" },
  { value: "7", label: "объектов сдано" },
  { value: "5–15", label: "тыс. м² на проект" },
  { value: "ИТР", label: "и рабочие в штате" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-40 px-5 md:px-12 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-32 items-center">

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
              className="text-4xl md:text-6xl font-light text-[#1c1c1c] leading-tight mb-6 md:mb-8"
            >
              О компании
            </h2>

            <div className="space-y-5 text-[#7a7a7a] font-light leading-relaxed text-base">
              <p>
                ООО «Смарт Декор» выполняет малярные работы на объектах жилого и
                коммерческого строительства: базовая шпаклёвка, безвоздушная покраска,
                декоративная штукатурка.
              </p>
              <p>
                Работаем механизированным способом — это даёт скорость и ровный слой
                на больших площадях. Объёмы на проектах от 5 до 15 тысяч м².
              </p>
              <p>
                Обеспечиваем объект собственным оборудованием, рабочими и ИТР из числа
                штатных сотрудников. Отвечаем за результат на каждом этапе — от подготовки
                основания до финишного покрытия.
              </p>
            </div>

            <div className="mt-10 md:mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="px-7 md:px-8 py-3.5 bg-[#1c1c1c] text-[#f5f4f2] text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase font-light hover:bg-[#2e2e2e] transition-colors duration-300 whitespace-nowrap"
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
                className="bg-[#f5f4f2] hover:bg-[#eeede9] p-7 md:p-12 flex flex-col justify-between transition-colors duration-500 group"
              >
                <span
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-3xl md:text-5xl font-light text-[#1c1c1c] leading-none mb-3 md:mb-4"
                >
                  {s.value}
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#7a7a7a] font-light leading-relaxed">
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
