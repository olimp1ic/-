export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">

            {/* HEADER */}
            <header className="flex justify-between items-center px-10 py-6 border-b border-white/10">
                <div className="text-lg tracking-widest">
                    Смарт Декор
                </div>
                <nav className="text-sm text-gray-400 space-x-6">
                    <a href="#">Услуги</a>
                    <a href="#">Проекты</a>
                    <a href="#">Контакты</a>
                </nav>
            </header>

            {/* HERO */}
            <section className="relative flex items-center justify-center text-center min-h-[80vh] px-6">

                {/* glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

                <div className="relative z-10 max-w-3xl">

                    <p className="text-gray-400 tracking-[0.3em] text-sm uppercase">
                        Декоративные покрытия
                    </p>

                    <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
                        Интерьеры<br /> премиум-класса
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg">
                        Создаём современные пространства с декоративными и архитектурными решениями
                    </p>

                    <button className="mt-10 px-10 py-4 border border-white/30 hover:bg-white hover:text-black transition">
                        Оставить заявку
                    </button>

                </div>
            </section>

            {/* SERVICES */}
            <section className="px-10 py-20 border-t border-white/10">

                <h2 className="text-3xl font-light mb-10">Услуги</h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="p-6 border border-white/10 hover:border-white/40 transition">
                        <h3 className="text-xl mb-2">Декоративная штукатурка</h3>
                        <p className="text-gray-400 text-sm">
                            Премиальные покрытия для стен с уникальной текстурой
                        </p>
                    </div>

                    <div className="p-6 border border-white/10 hover:border-white/40 transition">
                        <h3 className="text-xl mb-2">Микроцемент</h3>
                        <p className="text-gray-400 text-sm">
                            Современные бесшовные поверхности для интерьеров
                        </p>
                    </div>

                    <div className="p-6 border border-white/10 hover:border-white/40 transition">
                        <h3 className="text-xl mb-2">Дизайн интерьера</h3>
                        <p className="text-gray-400 text-sm">
                            Полный цикл разработки интерьеров под ключ
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}