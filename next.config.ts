import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // experimental: { // appDir is true by default in Next.js 15, serverActions true by default
  //   turbo: true, // Turbopack is enabled by default for `next dev` in Next.js 15
  // }, // No longer need to explicitly set these for Next.js 15+
  images: {
    // domains: ['your-cdn.com', 'images.unsplash.com'], // Add actual domains if used
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
      // Add other remote patterns if you use external images from other CDNs
      // For example, if you had 'your-cdn.com':
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
