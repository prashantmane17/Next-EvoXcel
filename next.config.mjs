/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"], // Add any other domains you want to allow
  },
};

export default nextConfig;
