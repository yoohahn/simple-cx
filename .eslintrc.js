const ERROR = 2;
const IGNORE = 0;

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "jest", "prettier"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    // @TYPESCRIPTS
    "no-unused-vars": IGNORE,
    "@typescript-eslint/no-unused-vars": ERROR,
    "no-use-before-define": IGNORE,
    "@typescript-eslint/no-use-before-define": ERROR,
    "no-shadow": IGNORE,
    "@typescript-eslint/no-shadow": ERROR,
    // Eslint standard rules
    "no-console": ERROR,
    "comma-dangle": [ERROR, "always-multiline"],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "es5",
        quoteProps: "consistent",
        endOfLine: "lf",
        arrowParens: "always",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.spec.tsx"],
      extends: ["plugin:jest/recommended"],
      env: {
        jest: true,
      },
    },
  ],
};
