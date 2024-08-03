import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  //react-markdown を babel-jest でコンパイルして ESM => CJS に変更
  // preset: "ts-jest/presets/js-with-babel",
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.json",
  //     useESM: true,
  //   },
  // },
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Babelで変換
  // },
  // transformIgnorePatterns: ["/node_modules/(?!react-markdown|rehype-raw)"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
