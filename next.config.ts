import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  output: "standalone",

  allowedDevOrigins: [
    "192.168.1.132",
  ],

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;