/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "static.vecteezy.com"],
  },
};

module.exports = nextConfig;
