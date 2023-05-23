import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';

export const revalidate = 3; // 3초

export default async function Products() {
  const products = getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // 3초 간격 ISR
    next: { revalidate: 3 },
    // SSR
    // next: { revalidate: 0 },
    // cache:'no-store'
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {(await products).map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
