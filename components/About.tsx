const stats = [
  { value: "28 000+", label: "м² выполнено за год" },
  { value: "8",       label: "крупных ЖК в портфеле" },
  { value: "5",       label: "ведущих застройщиков" },
  { value: "100%",    label: "промышленное оборудование" },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Text */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8" style={{ background: "var(--heading)" }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: "var(--body)" }}>
                О компании
              </span>
            </div>

            <h2
              style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
              className="text-5xl md:text-6xl font-light leading-tight mb-8"
            >
              Точность
              <br />
              <span className="italic" style={{ color: "var(--mid)" }}>в каждом метре</span>
            </h2>

            <div className="space-y-5 font-light leading-relaxed text-base" style={{ color: "var(--mid)" }}>
              <p>
                Наше механизированное нанесение позволяет безупречно выполнять сложные фактуры
                на объектах любой площади — от элитных апартаментов до крупных коммерческих
                пространств.
              </p>
              <p>
                Благодаря отработанной технологии и слаженной работе команды профессионалов,
                воспитанной не одним объектом, мы гарантируем высочайшее качество на каждом
                этапе: от подготовки основания до финишного покрытия.
              </p>
              <p>
                Используем только промышленное оборудование и премиальные материалы — это даёт
                возможность реализовывать самые смелые дизайнерские решения с идеальной
                геометрией и долговечностью.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase font-light transition-opacity duration-300 hover:opacity-75"
                style={{ background: "var(--heading)", color: "var(--bg-base)" }}
              >
                Обсудить объект
              </a>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, var(--line), transparent)" }} />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px reveal reveal-delay-2" style={{ background: "var(--line)" }}>
            {stats.map(s => (
              <div
                key={s.label}
                className="p-10 md:p-12 flex flex-col justify-between transition-colors duration-500 group"
                style={{ background: "var(--bg-base)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-alt)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg-base)")}
              >
                <span
                  style={{ fontFamily: "var(--font-cormorant)", color: "var(--heading)" }}
                  className="text-4xl md:text-5xl font-light leading-none mb-4"
                >
                  {s.value}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-light" style={{ color: "var(--mid)" }}>
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
