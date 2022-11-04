/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
        pathname: "/v/**",
      },
    ],
  },
};

module.exports = nextConfig;
