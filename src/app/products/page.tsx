import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '../components/MeowArticle';

export const revalidate = 3; // 3초

export default async function Products() {
  throw new Error(); // 에러 UI 확인용
  const products = getProducts();

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
      <MeowArticle />
    </>
  );
}
