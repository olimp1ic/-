import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Смарт Декор — Премиальные интерьерные решения",
  description:
    "Декоративные покрытия, микроцемент, декоративная штукатурка и интерьерные решения под ключ. Создаём пространства, которые говорят о статусе.",
  keywords: "микроцемент, декоративная штукатурка, декоративные покрытия, интерьер под ключ, отделка Москва",
  openGraph: {
    title: "Смарт Декор — Премиальные интерьерные решения",
    description: "Создаём пространства, которые говорят о статусе.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="grain">{children}</body>
    </html>
  );
}
