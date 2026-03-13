/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hyggehousesuites.com" }],
        destination: "https://hyggehousestay.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hyggehousesuites.com" }],
        destination: "https://hyggehousestay.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
