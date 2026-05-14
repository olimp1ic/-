# Смарт Декор — Сайт

Премиальный сайт для компании по декоративным покрытиям и интерьерным решениям.

## Стек

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**

---

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

---

## Деплой на Vercel

### Шаг 1 — Загрузить на GitHub

1. Создайте новый репозиторий на [github.com](https://github.com/new)
2. В папке проекта выполните:

```bash
git init
git add .
git commit -m "Initial commit: Смарт Декор сайт"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/smart-decor.git
git push -u origin main
```

### Шаг 2 — Подключить Vercel

1. Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub
2. Нажмите **"Add New Project"**
3. Выберите ваш репозиторий `smart-decor`
4. Нажмите **"Deploy"** — всё настроено автоматически!

Vercel сам определит Next.js и задеплоит за ~2 минуты.

---

## Как добавить свои фотографии

### Вариант 1 — Локальные файлы (рекомендуется)

1. Добавьте ваши фото в папку `/public/images/`:
   ```
   public/
   └── images/
       ├── project-1.jpg
       ├── project-2.jpg
       ├── hero-bg.jpg
       └── ...
   ```

2. В файле `components/Portfolio.tsx` замените ссылки Unsplash на свои:
   ```tsx
   // Было (временные изображения Unsplash):
   img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
   
   // Стало (ваши фото):
   img: "/images/project-1.jpg",
   ```

### Вариант 2 — Google Drive / Яндекс.Диск

Загрузите фото, получите прямую ссылку и вставьте в `img:`.

### Рекомендации по фото

- Формат: **JPG** или **WebP**
- Размер: от **1200×800px** для портфолио, **1920×1080px** для широких блоков
- Вес: до **500 КБ** после сжатия (используйте [squoosh.app](https://squoosh.app))
- Соотношение сторон: **4:3** или **16:9**

---

## Настройки под ваш бизнес

| Файл | Что изменить |
|------|-------------|
| `components/Header.tsx` | Логотип, навигация |
| `components/Hero.tsx` | Главный заголовок, подпись |
| `components/Services.tsx` | Услуги, описания |
| `components/Portfolio.tsx` | Проекты, фото |
| `components/About.tsx` | Текст о компании, цифры |
| `components/Contact.tsx` | Телефон, email, ссылки мессенджеров |
| `app/layout.tsx` | SEO: title, description |

### Ссылки мессенджеров в `Contact.tsx`:
```tsx
// WhatsApp — замените номер:
href="https://wa.me/79999999999"

// Telegram — замените username:
href="https://t.me/smartdecor"
```

### Форма заявки

По умолчанию форма имитирует отправку. Для реальной работы:

**Через Formspree (бесплатно):**
1. Зарегистрируйтесь на [formspree.io](https://formspree.io)
2. Создайте форму, получите ID (например `xpzgkqrw`)
3. В `Contact.tsx` замените `handleSubmit`:
```tsx
const res = await fetch("https://formspree.io/f/xpzgkqrw", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```
