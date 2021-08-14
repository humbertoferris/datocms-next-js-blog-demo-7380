const hoistNonReactStatics = require("hoist-non-react-statics");

module.exports = {
  defaultLocale: "pt",
  locales: ["pt", "en"],
  localeDetection: true,
  staticsHoc: hoistNonReactStatics,
  pages: {
    "*": ["common", "header", "footer", "error"],
    "/login": ["form"],
    "/register": ["form"],
    "/404": ["error"]
  },
  interpolation: {
    prefix: "${",
    suffix: "}"
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/locales/${locale}/${namespace}`).then(m => m.default)
};
