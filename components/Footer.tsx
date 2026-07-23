import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4d3cf] px-5 md:px-12 py-10 md:py-12 bg-[#f5f4f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-[#1c1c1c] flex-shrink-0" />
            <div className="flex flex-col items-start">
              <span
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                className="text-xl font-light tracking-[0.15em] text-[#1c1c1c]"
              >
                СМАРТ ДЕКОР
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-[#b0afa9] uppercase mt-0.5">
                Декоративные покрытия
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {["Услуги", "Объекты", "О нас", "Контакты"].map((item, i) => (
              <a
                key={item}
                href={`#${["services", "portfolio", "about", "contact"][i]}`}
                className="text-[10px] tracking-[0.3em] uppercase text-[#b0afa9] hover:text-[#5a5a5a] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-[10px] tracking-[0.2em] text-[#b0afa9] uppercase">
            © {new Date().getFullYear()} Смарт Декор
          </p>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#d4d3cf] to-transparent" />

        <p className="text-center text-[9px] md:text-[10px] text-[#b0afa9] mt-6 font-light tracking-wider leading-relaxed">
          г. Москва, ул. Потаповская Роща, д. 2, корп. 4, пом. 47К/П &nbsp;·&nbsp; +7 929 989 00 78
        </p>
      </div>
    </footer>
  );
}
