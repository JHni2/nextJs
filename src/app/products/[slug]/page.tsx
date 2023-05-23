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

export default function pants({ params }: Props) {
  return <h1>{params.slug} 페이지!</h1>;
}

// 미리 페이지를 만들 고 싶을 때 경로 지정
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
