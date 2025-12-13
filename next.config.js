/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3pyarv4eotqu4.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "www.printongo.com",
      },
      {
        protocol: "https",
        hostname: "ecomapi.ftdigitalsolutions.org",
      },
      {
        protocol: "https",
        hostname: "semantic-ui.com",
      },
    ],
  },
  eslint: {
    // 🚀 Ignores ESLint errors/warnings during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
