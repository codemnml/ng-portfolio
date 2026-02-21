import type { Metadata } from 'next';
import { Roboto, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Michael - Web Developer',
  description: 'Portfolio of Michael, Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable} font-roboto antialiased flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-[#FFFFFF] to-[#ECE9E6]`}>
        <Header />
        <main className="flex-grow pt-20 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
