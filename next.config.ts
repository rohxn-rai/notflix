import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.adobe.com *.adobedtm.com *.omtrdc.net;
    connect-src 'self' *.adobe.com *.omtrdc.net *.demdex.net;
    style-src 'self' 'unsafe-inline';
    img-src 'self' *.adobe.com *.omtrdc.net data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
  allowedDevOrigins: process.env.LOCALDEVURL
    ? JSON.parse(process.env.LOCALDEVURL)
    : [],
  reactStrictMode: true,
};

export default nextConfig;
