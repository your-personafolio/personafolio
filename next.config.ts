import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy semua permintaan ke /api/ ke server backend
        destination: "http://localhost:3000/:path*", // Ganti dengan URL backend Anda
      },
    ];
  },
};

export default nextConfig;
