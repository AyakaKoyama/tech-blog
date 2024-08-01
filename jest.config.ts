import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      useESM: true,
    },
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Babelで変換
  },
  transformIgnorePatterns: ["/node_modules/(?!(react-markdown|other-module)/)"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

export default createJestConfig(config);
