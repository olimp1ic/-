export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-border px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-3">
          <div className="w-5 h-5 border border-gold flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gold" />
          </div>
          <span className="font-display text-base tracking-widest uppercase text-ivory">
            Смарт<span className="text-gold"> Декор</span>
          </span>
        </a>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
          {['Услуги', 'Портфолио', 'О нас', 'Контакты'].map((item, i) => (
            <a
              key={i}
              href={`#${['services', 'portfolio', 'about', 'contact'][i]}`}
              className="font-body text-[10px] tracking-widest uppercase text-dim hover:text-ivory transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="font-body text-[10px] text-dim tracking-wide">
          © {new Date().getFullYear()} Смарт Декор. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
