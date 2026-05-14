const services = [
  {
    num: "01",
    title: "Декоративная штукатурка",
    desc: "Венецианская, марморино, травертино — фактурные покрытия с уникальным характером для каждого пространства.",
    tags: ["Венецианская", "Марморино", "Травертино"],
  },
  {
    num: "02",
    title: "Микроцемент",
    desc: "Бесшовные поверхности с минералистичной эстетикой. Полы, стены, мебель — единая пластика пространства.",
    tags: ["Полы", "Стены", "Ванные"],
  },
  {
    num: "03",
    title: "Интерьерный дизайн",
    desc: "Концепции, которые рождаются из диалога с клиентом. Детальная проработка каждого квадратного сантиметра.",
    tags: ["Концепция", "3D-визуализация", "Авторский надзор"],
  },
  {
    num: "04",
    title: "Отделка под ключ",
    desc: "От чернового до финишного. Управляем проектом целиком — сроки, бюджет, качество под личным контролем.",
    tags: ["Черновая", "Чистовая", "Финишная"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 bg-[#b8a070]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a070] font-light">
                Что мы делаем
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
            >
              Услуги
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-[#5a5a5a] font-light leading-relaxed text-right">
            Каждый проект — это индивидуальная история. Мы не используем шаблоны.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group relative bg-[#080808] p-10 md:p-14 hover:bg-[#0f0f0f] transition-colors duration-500 overflow-hidden cursor-default`}
            >
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#b8a070] group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-px h-0 bg-[#b8a070]/30 group-hover:h-full transition-all duration-700 delay-100" />

              {/* Number */}
              <span
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="block text-[80px] md:text-[100px] font-light text-[#161616] leading-none mb-6 group-hover:text-[#1e1e1e] transition-colors duration-500 select-none"
              >
                {svc.num}
              </span>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="text-3xl md:text-4xl font-light text-white mb-4 group-hover:text-[#d4ba8a] transition-colors duration-500"
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5a5a5a] font-light leading-relaxed mb-8 group-hover:text-[#7a7a7a] transition-colors duration-500">
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.25em] uppercase text-[#3d3d3d] border border-[#2a2a2a] px-3 py-1 group-hover:border-[#b8a070]/30 group-hover:text-[#7a7a7a] transition-all duration-500"
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
