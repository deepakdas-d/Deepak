/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  async rewrites() {
    return [
      {
        source: '/aboutme',
        destination: '/',
      },
      {
        source: '/expertise',
        destination: '/',
      },
      {
        source: '/experience',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      }
    ];
  },
};

export default nextConfig;
