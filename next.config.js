const webpack = require("webpack");
const withFonts = require("next-fonts");
const withPurgeCss = require("next-purgecss");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withPolyfill = require("next-with-polyfill");
const nextTranslate = require("next-translate");
const withMDX = require("@next/mdx")();
const withImages = require("next-images");
const { withPlaiceholder } = require("@plaiceholder/next");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

require("dotenv").config();

// const {
//   CLIENT_STATIC_FILES_RUNTIME_POLYFILLS
// } = require("next/dist/next-server/lib/constants.js");

const nextConfig = {
  mode: "jit",
  inlineImageLimit: false,
  images: {
    domains: ["datocms-assets.com", "www.datocms-assets.com"]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "handlebars-loader", // handlebars loader expects raw resource string
          "extract-loader",
          "css-loader"
        ]
      }
    ]
  },
  alias: {
    path: require.resolve("path-browserify")
  },
  env: {
    appTitle: "Correndo Provas",
    appUrl: process.env.APP_URL,
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  exportPathMap: function (__nextDefaultLocale, __nextLocale) {
    return {
      "/(__nextDefaultLocale)": { page: "/(__nextLocale)" },
      login: {
        page: "/login/"
      },
      register: {
        page: "/register/"
      }
    };
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY"
          }
        ]
      }
    ];
  },
  trailingSlash: true,
  purgeCssEnabled: ({ dev }) => !dev, // Disable purgecss during development
  purgeCss: {
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelist: () => ["__next"],
    whitelistPatterns: () => [/svg.*/, /fa.*/] // Keep Fontawesome classes
  },
  webpack: config => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };

    config.resolve.modules = [path.resolve("./node_modules"), path.resolve("src")];
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  }
};

module.exports = withPlugins(
  [
    nextTranslate(
      withBundleAnalyzer(
        withPurgeCss(withPlaiceholder(withImages(withFonts(nextConfig))))
      )
    )
  ],
  // [
  //   withPolyfill(
  //     ["./node_modules/core-js/stable", "./node_modules/regenerator-runtime/runtime"],
  //     CLIENT_STATIC_FILES_RUNTIME_POLYFILLS
  //   )
  // ],
  [withMDX()]
);
