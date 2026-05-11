'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const sectionRef = useReveal();
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 bg-graphite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          ref={sectionRef as React.RefObject<HTMLDivElement>}
        >
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-widest uppercase text-gold">
                Свяжитесь с нами
              </span>
            </div>
            <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight text-ivory reveal reveal-delay-1">
              Начнём ваш
              <br />
              <span className="italic text-gold">проект</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 flex flex-col gap-3">
            <a
              href="https://wa.me/79000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    fill="#C9A96E"
                  />
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 1.89.522 3.659 1.432 5.173L2 22l4.955-1.398A9.945 9.945 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <div className="font-body text-[10px] tracking-widest uppercase text-dim mb-1">
                  WhatsApp
                </div>
                <div className="font-body text-sm text-ivory group-hover:text-gold transition-colors">
                  +7 (900) 000-00-00
                </div>
              </div>
            </a>

            <a
              href="https://t.me/smartdecor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.94c-.12.56-.46.7-.92.43l-2.56-1.88-1.22 1.18c-.14.14-.26.26-.52.26l.18-2.62 4.72-4.26c.2-.18-.04-.28-.32-.1L7.9 14.6l-2.5-.78c-.54-.17-.56-.54.12-.8l9.78-3.76c.44-.16.84.1.34.54z"
                    fill="#C9A96E"
                  />
                </svg>
              </div>
              <div>
                <div className="font-body text-[10px] tracking-widest uppercase text-dim mb-1">
                  Telegram
                </div>
                <div className="font-body text-sm text-ivory group-hover:text-gold transition-colors">
                  @smartdecor
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="flex flex-col items-start gap-6 py-16">
                <div className="w-12 h-12 border border-gold flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10L8 15L17 5" stroke="#C9A96E" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-3xl text-ivory mb-3">Заявка отправлена</h3>
                  <p className="font-body text-mid text-sm leading-relaxed">
                    Свяжемся с вами в течение рабочего дня для обсуждения деталей проекта.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-dim">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Алексей Смирнов"
                    className="bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-ivory text-sm placeholder:text-muted transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-dim">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-ivory text-sm placeholder:text-muted transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] tracking-widest uppercase text-dim">
                    Расскажите о проекте
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Объект, площадь, задача..."
                    className="bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-ivory text-sm placeholder:text-muted transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold border border-gold px-8 py-4 text-xs tracking-widest uppercase text-gold font-body self-start mt-4"
                >
                  <span>Отправить заявку</span>
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="flex flex-col justify-between gap-12 reveal reveal-delay-3">
            <div>
              <div className="font-body text-[10px] tracking-widest uppercase text-gold mb-4">
                Адрес
              </div>
              <p className="font-body text-mid text-sm leading-loose">
                Москва, Пресненская набережная, 10,<br />
                МФК «Башня Федерация», офис 42
              </p>
            </div>
            <div>
              <div className="font-body text-[10px] tracking-widest uppercase text-gold mb-4">
                Часы работы
              </div>
              <p className="font-body text-mid text-sm leading-loose">
                Пн — Пт: 9:00 — 19:00<br />
                Сб: 10:00 — 16:00
              </p>
            </div>
            <div>
              <div className="font-body text-[10px] tracking-widest uppercase text-gold mb-4">
                Email
              </div>
              <a
                href="mailto:info@smartdecor.ru"
                className="font-body text-mid text-sm hover:text-gold transition-colors"
              >
                info@smartdecor.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
