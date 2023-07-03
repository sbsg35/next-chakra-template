//@ts-check

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  // @ts-ignore
  i18n,
};

module.exports = { ...nextConfig };
