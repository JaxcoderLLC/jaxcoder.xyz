const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.tsx");

module.exports = {
  withNextra: withNextra({
    env: {
      InfuraKey: process.env.INFURA_KEY,
    },
  }),
};
