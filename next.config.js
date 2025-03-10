/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Add your image domains here
  },
  //   async redirects() {
  //     return [
  //       {
  //         source: '/old-path',
  //         destination: '/new-path',
  //         permanent: true,
  //       },
  //     ];
  //   },
  //   async rewrites() {
  //     return [
  //       {
  //         source: '/api/:path*',
  //         destination: 'https://external-api.com/:path*',
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
