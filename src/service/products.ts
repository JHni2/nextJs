import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);

  // 하드코딩
  // return ['shirt', 'pants', 'skirt', 'shoes', 'dress'];
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);

  // 하드코딩
  // return 'shirt';
}
