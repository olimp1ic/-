export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">

            {/* ФОН */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

            {/* ШАПКА */}
            <header className="relative z-10 flex justify-between items-center px-10 py-6">
                <div className="text-lg tracking-widest">
                    Смарт Декор
                </div>

                <div className="text-sm text-gray-400">
                    Интерьерные решения
                </div>
            </header>

            {/* HERO */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center -mt-20">
                <div>

                    <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
                        Декоративные покрытия
                    </p>

                    <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
                        Интерьеры <br />
                        премиум-класса
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
                        Создаём современные пространства с использованием декоративных покрытий
                    </p>

                    <button className="mt-10 px-10 py-4 border border-white/30 hover:border-white transition">
                        Оставить заявку
                    </button>

                </div>
            </div>

        </main>
    );
}