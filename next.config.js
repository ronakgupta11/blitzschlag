/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle glb files
    config.module.rules.push({
      test: /\.(glb)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    // You might need this additional configuration for server-side rendering
    // if (isServer) {
    //   const originalEntry = config.entry;

    //   config.entry = async () => {
    //     const entries = await originalEntry();
    //     entries['./scripts/exporter.js'] = './scripts/exporter.js';
    //     return entries;
    //   };
    // }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        // port: "",
        // pathname: "/v0/b/",
      },
    ],
  },
};
module.exports = nextConfig;
