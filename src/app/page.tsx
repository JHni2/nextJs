import { Inter } from '@next/font/google';
import Counter from './components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  );
}
