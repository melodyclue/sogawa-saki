import type { Metadata } from 'next';
import './globals.css';

import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sogawa Saki | STU48 3rd gen Links',
  description: 'Sogawa Saki STU48 3rd gen Links',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className} `}>
        <div className="bg-gradient-to-br from-indigo-50/50 to-pink-50/50 grid grid-rows-[1fr_auto] grid-cols-[100%] min-h-screen">
          {children}
          <footer className="text-center text-sm text-slate-500 py-1 sr-only">
            <p>Sogawa Saki links</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
