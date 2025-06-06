import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // experimental: { // appDir is true by default in Next.js 15, serverActions true by default
  //   turbo: true, // Turbopack is enabled by default for `next dev` in Next.js 15
  // }, // No longer need to explicitly set these for Next.js 15+
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        // Allow loading YouTube video thumbnails (poster frames) like /vi/<video-id>/*
        pathname: '/vi/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
