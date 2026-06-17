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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
