import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Смарт Декор — Премиальные интерьерные решения',
  description:
    'Декоративные покрытия, микроцемент и интерьерные решения под ключ. Создаём пространства, которые останавливают взгляд.',
  keywords: 'микроцемент, декоративная штукатурка, декоративные покрытия, интерьер под ключ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-obsidian text-ivory antialiased">{children}</body>
    </html>
  );
}
