/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    // Src
    "!./**/*",
    "src/**/*",
  ],
  testRegex: "((!lib|!dist).*/src/.*/__tests__/.*|(\\.|/)(spec))\\.ts$",
  moduleFileExtensions: ["js", "ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  testEnvironment: "node",
};
