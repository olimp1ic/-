"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// НАСТРОЙКА ОТПРАВКИ ЗАЯВОК НА ПОЧТУ:
// 1. Зарегистрируйся на https://formspree.io (бесплатно)
// 2. Создай новую форму, укажи почту info.smartdecor@mail.ru
// 3. Скопируй ID формы (выглядит как "xldegzvp")
// 4. Вставь его в строку ниже вместо ВАШ_ID
// Пока ID не вставлен — форма покажет сообщение об ошибке.
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = "ВАШ_ID";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (FORMSPREE_ID === "ВАШ_ID") {
      setError("Форма ещё не подключена. Позвоните нам или напишите в WhatsApp.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Имя: form.name,
          Телефон: form.phone,
          Сообщение: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("Не удалось отправить. Позвоните нам или напишите в WhatsApp.");
      }
    } catch {
      setError("Ошибка соединения. Позвоните нам или напишите в WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-40 px-5 md:px-12 bg-[#eeede9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-32">

          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#2e2e2e]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5a5a5a] font-light">
                Свяжитесь с нами
              </span>
            </div>

            <h2
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              className="text-4xl md:text-6xl font-light text-[#1c1c1c] leading-tight mb-6 md:mb-8"
            >
              Обсудим
              <br />
              <span className="italic text-[#5a5a5a]">ваш объект</span>
            </h2>

            <p className="text-[#7a7a7a] font-light leading-relaxed mb-12 text-base max-w-sm">
              Расскажите о площади и фактуре — рассчитаем стоимость и сроки.
              Перезвоним в течение нескольких часов.
            </p>

            <div className="flex flex-col gap-3 mb-12">
              <a
                href="https://wa.me/79299890078"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-4 md:px-6 py-4 border border-[#d4d3cf] hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 bg-white/40"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.122 1.515 5.857L.057 23.272a.5.5 0 0 0 .617.651l5.528-1.448A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882c-1.899 0-3.68-.51-5.215-1.403l-.374-.222-3.88 1.017 1.036-3.78-.244-.39A9.869 9.869 0 0 1 2.118 12C2.118 6.54 6.54 2.118 12 2.118S21.882 6.54 21.882 12 17.46 21.882 12 21.882z"/>
                </svg>
                <span className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#5a5a5a] group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</span>
                <span className="ml-auto text-[9px] md:text-[10px] tracking-[0.1em] text-[#b0afa9] font-light whitespace-nowrap">+7 929 989 00 78</span>
              </a>

              <a
                href="https://t.me/smartdecorru"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-4 md:px-6 py-4 border border-[#d4d3cf] hover:border-[#229ED9]/50 hover:bg-[#229ED9]/5 transition-all duration-300 bg-white/40"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#229ED9]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.022 9.531c-.15.668-.544.832-1.102.516l-3.042-2.24-1.468 1.413c-.162.162-.298.298-.612.298l.218-3.087 5.624-5.082c.245-.218-.053-.338-.38-.12L6.862 14.7l-2.991-.936c-.65-.204-.663-.65.136-.963l11.678-4.506c.541-.196 1.015.132.877.953z"/>
                </svg>
                <span className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#5a5a5a] group-hover:text-[#229ED9] transition-colors duration-300">Telegram</span>
                <span className="ml-auto text-[9px] md:text-[10px] tracking-[0.1em] text-[#b0afa9] font-light whitespace-nowrap">@smartdecorru</span>
              </a>
            </div>

            <div className="space-y-4 text-sm font-light border-t border-[#d4d3cf] pt-8">
              <div className="flex items-start gap-4">
                <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#b0afa9] w-16 md:w-20 flex-shrink-0 mt-1">Телефон</span>
                <a href="tel:+79299890078" className="text-[#5a5a5a] hover:text-[#1c1c1c] transition-colors duration-300 break-all">+7 929 989 00 78</a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#b0afa9] w-16 md:w-20 flex-shrink-0 mt-1">Почта</span>
                <a href="mailto:info.smartdecor@mail.ru" className="text-[#5a5a5a] hover:text-[#1c1c1c] transition-colors duration-300 break-all">info.smartdecor@mail.ru</a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#b0afa9] w-16 md:w-20 flex-shrink-0 mt-1">Адрес</span>
                <span className="text-[#5a5a5a] leading-relaxed">Московская область,<br />г. Балашиха, ул. Свердлова, д. 10</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center py-20">
                <div className="h-px w-16 bg-[#2e2e2e] mb-8" />
                <h3
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  className="text-4xl font-light text-[#1c1c1c] mb-4"
                >
                  Заявка отправлена
                </h3>
                <p className="text-[#7a7a7a] font-light">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] tracking-[0.35em] uppercase text-[#b0afa9] mb-3 font-light">Имя</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-[#d4d3cf] focus:border-[#1c1c1c] text-[#1c1c1c] placeholder-[#b0afa9] py-3 text-sm font-light outline-none transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.35em] uppercase text-[#b0afa9] mb-3 font-light">Телефон</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+7 (___) ___-__-__"
                    className="w-full bg-transparent border-b border-[#d4d3cf] focus:border-[#1c1c1c] text-[#1c1c1c] placeholder-[#b0afa9] py-3 text-sm font-light outline-none transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.35em] uppercase text-[#b0afa9] mb-3 font-light">Площадь и тип фактуры</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Например: ЖК, 2000 м², фактура Капля..."
                    className="w-full bg-transparent border-b border-[#d4d3cf] focus:border-[#1c1c1c] text-[#1c1c1c] placeholder-[#b0afa9] py-3 text-sm font-light outline-none transition-colors duration-300 resize-none" />
                </div>
                <div className="pt-4">
                  {error && (
                    <p className="text-[11px] text-[#a03030] font-light mb-4 leading-relaxed">
                      {error}
                    </p>
                  )}
                  <button type="submit" disabled={loading}
                    className="w-full py-4 bg-[#1c1c1c] text-[#f5f4f2] text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-[#2e2e2e] transition-all duration-300 disabled:opacity-50 disabled:cursor-wait">
                    {loading ? "Отправка..." : "Отправить заявку"}
                  </button>
                </div>
                <p className="text-[10px] text-[#b0afa9] font-light text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
