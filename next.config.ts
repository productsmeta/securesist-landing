import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Optimize production builds
  // swcMinify: true,
  // Reduce JavaScript bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize fonts
  // optimizeFonts: true,
};

export default nextConfig;
