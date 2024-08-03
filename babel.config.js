module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }], // 自動JSX変換
    "@babel/plugin-transform-modules-commonjs", // ESMからCJSへの変換を追加
  ],
};
