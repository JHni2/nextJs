import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
  };
}

export default async function Product({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 페이지!</h1>;
}

// 미리 페이지를 만들 고 싶을 때 경로 지정
export async function generateStaticParams() {
  const products = getProducts();
  return (await products).map((product) => ({
    slug: product.id,
  }));
}
