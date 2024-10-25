/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  compress: true, // Enables built-in Next.js compression
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"], // Add any other domains you want to allow
  },
  experimental: {
    optimizeCss: true, // Minifies CSS for faster load times
  },
};

export default nextConfig;
