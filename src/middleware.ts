import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어 실행중');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉트');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// 특정 경로에서만 수행되도록 설정
export const config = {
  matcher: ['/products/:path+'],
};
