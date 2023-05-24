import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '../components/MeowArticle';
import clothesImage from 'public/images/clothesImage.jpg';
import Image from 'next/image';

export const revalidate = 3; // 3초

export default async function Products() {
  const products = getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="localClothes" />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="lothes" width={400} height={400} />
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
