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
  transformIgnorePatterns: ["/node_modules/(?!(react-markdown)/)"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
};

export default createJestConfig(config);
