import { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import { Open_Sans } from '@next/font/google';
import { Nanum_Gothic } from '@next/font/google';

const sans = Open_Sans({ subsets: ['latin'] }); // variable fonts
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매합니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <head />
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
