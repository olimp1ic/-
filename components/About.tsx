export default function About() {
    return (
        <section
            id="about"
            className="py-32 md:py-40 px-6 md:px-12 bg-[#f2f2f2]"
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* IMAGE */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80"
                            alt="Smart Decor"
                            className="w-full h-[700px] object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div>

                        <p className="uppercase tracking-[0.3em] text-sm text-[#777] mb-6">
                            Smart Decor
                        </p>

                        <h2 className="text-5xl md:text-7xl leading-[0.95] font-light tracking-[-0.04em] text-[#111] mb-10">
                            Интерьерные решения
                            нового уровня
                        </h2>

                        <p className="text-[#555] leading-9 text-lg mb-6">
                            Наше механизированное нанесение позволяет безупречно выполнять сложные фактуры на объектах любой площади — от элитных апартаментов до крупных коммерческих пространств.
                        </p>

                        <p className="text-[#555] leading-9 text-lg mb-6">
                            Благодаря отработанной технологии и слаженной работе нашей команды профессионалов, мы гарантируем высочайшее качество на каждом этапе — от подготовки основания до финишного покрытия.
                        </p>

                        <p className="text-[#555] leading-9 text-lg">
                            Используем промышленное оборудование и премиальные материалы, что позволяет реализовывать самые смелые дизайнерские решения с идеальной геометрией и долговечностью.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}