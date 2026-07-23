import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Смарт Декор — Отделочные работы под ключ",
  description:
    "Штукатурка, гипсокартон, шпаклёвка, безвоздушная покраска и декоративные покрытия механизированным способом. Работаем с застройщиками LEVEL, ЛСР, COLDY. Москва.",
  keywords: "отделочные работы, механизированная штукатурка, гипсокартон, шпаклёвка, безвоздушная покраска, декоративная штукатурка, ЖК отделка, Москва",
  openGraph: {
    title: "Смарт Декор — Декоративные покрытия",
    description: "Полный цикл отделки механизированным способом на объектах любой площади.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="grain">{children}</body>
    </html>
  );
}
