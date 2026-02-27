import withPWA from "@ducanh2912/next-pwa";

const isDev = process.env.NODE_ENV === "development";

const pwaPlugin = withPWA({
  dest: "public",
  disable: isDev,
});

const nextConfig = {
  reactStrictMode: true,

  turbopack: {},
};

const config = {
  ...pwaPlugin,
  ...nextConfig,
};

export default config;