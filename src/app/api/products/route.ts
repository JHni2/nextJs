import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await getProducts();

  return NextResponse.json({ data: products });
}
