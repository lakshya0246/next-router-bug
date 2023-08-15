/** @type {import('next').NextConfig} */

const moduleExports = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/me/:path*",
          destination: "/users/:path*",
        },
      ],
      fallback: [],
    };
  },
};

module.exports = moduleExports;
