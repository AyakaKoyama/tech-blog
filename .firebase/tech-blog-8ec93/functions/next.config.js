// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/
    });
    return config;
  }
};
