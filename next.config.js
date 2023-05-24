/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever', // 이 경로로 오면
        destination: '/products', // 이 경로로 redirect
        permanent: true, // 영원히!
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false, // 일시적!
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/jh', // 대체할 경로
        destination: '/about/me/jh', // 원본 경로
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
