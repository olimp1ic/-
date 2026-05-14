export default function Footer() {
  return (
    <footer className="border-t border-[#161616] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-xl font-light tracking-[0.15em] text-white"
            >
              СМАРТ ДЕКОР
            </span>
            <span className="text-[10px] tracking-[0.4em] text-[#3d3d3d] uppercase mt-0.5">
              Interior &amp; Decor
            </span>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-8">
            {["Услуги", "Портфолио", "О нас", "Контакты"].map((item, i) => (
              <a
                key={item}
                href={`#${["services", "portfolio", "about", "contact"][i]}`}
                className="text-[10px] tracking-[0.3em] uppercase text-[#3d3d3d] hover:text-[#7a7a7a] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[10px] tracking-[0.2em] text-[#2a2a2a] uppercase">
            © {new Date().getFullYear()} Смарт Декор
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#b8a070]/20 to-transparent" />
      </div>
    </footer>
  );
}
