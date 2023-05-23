import Link from 'next/link';
import styles from './layout.module.css';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
