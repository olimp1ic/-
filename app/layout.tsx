import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Смарт Декор — Декоративные покрытия и фактурные штукатурки",
  description:
    "Механизированное нанесение декоративных штукатурок: Капля, Американка, Песчаник, Бетон. Работаем с крупными застройщиками — LEVEL, ЛСР, COLDY. Московская область, г. Балашиха.",
  keywords: "декоративная штукатурка, фактурные покрытия, механизированное нанесение, Капля, Американка, ЖК отделка, Балашиха",
  openGraph: {
    title: "Смарт Декор — Декоративные покрытия",
    description: "Механизированное нанесение фактурных штукатурок на объектах любой площади.",
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
