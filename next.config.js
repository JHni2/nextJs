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
        source: '/products/deleted_temp', // 이 경로로 오면
        destination: '/products', // 이 경로로 redirect
        permanent: false, // 일시적!
      },
    ];
  },
};

module.exports = nextConfig;
