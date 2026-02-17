import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  allowedDevOrigins: [
    ...(process.env.LOCALDEVURL ? [process.env.LOCALDEVURL] : []),
  ],
  reactStrictMode: true,
};

export default nextConfig;
