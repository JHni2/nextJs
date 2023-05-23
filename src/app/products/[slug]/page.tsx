type Props = {
  params: {
    slug: string;
  };
};

export default function pants({ params }: Props) {
  return <h1>{params.slug} 페이지!</h1>;
}
