# Смарт Декор — Сайт

Премиальный сайт для компании по декоративным покрытиям и интерьерным решениям.

## Стек
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Шрифты:** Cormorant Garamond (display) + DM Sans (body) — через `next/font/google`

## Запуск

```bash
npm install
npm run dev
```

Открыть: [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

1. Загрузить репозиторий на GitHub
2. Подключить в [vercel.com](https://vercel.com)
3. Vercel автоматически определит Next.js

## Структура проекта

```
smart-decor/
├── app/
│   ├── layout.tsx        # Root layout + шрифты + метаданные
│   ├── page.tsx          # Главная страница
│   └── globals.css       # Глобальные стили + анимации
├── components/
│   ├── Navbar.tsx        # Шапка (фиксированная, с burger меню)
│   ├── Hero.tsx          # Главный экран
│   ├── Services.tsx      # Раздел услуг
│   ├── Portfolio.tsx     # Портфолио
│   ├── About.tsx         # О компании + статистика
│   ├── Contact.tsx       # Форма + контакты
│   └── Footer.tsx        # Подвал
├── hooks/
│   └── useReveal.ts      # IntersectionObserver анимации
└── vercel.json
```

## Кастомизация

### Замена контактов
В `components/Contact.tsx` найти и заменить:
- `+7 (900) 000-00-00` → ваш номер
- `@smartdecor` → ваш Telegram
- `info@smartdecor.ru` → ваш email
- URL WhatsApp и Telegram ссылок

### Замена фото в портфолио
В `components/Portfolio.tsx` заменить `src` в массиве `projects` на URL своих фотографий или разместить их в `public/portfolio/`.

### Цвета
В `tailwind.config.js` в секции `colors`:
- `gold: '#C9A96E'` — акцентный цвет
- `obsidian: '#0A0A0A'` — основной фон
- `graphite: '#111111'` — вторичный фон

### Типографика
Шрифты настраиваются в `app/layout.tsx`. Cormorant Garamond используется для заголовков (display), DM Sans — для текста.
