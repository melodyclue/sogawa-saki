import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
