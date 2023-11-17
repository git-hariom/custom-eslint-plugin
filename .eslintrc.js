module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "no-bad-imports"],
  rules: {
    "no-bad-imports/no-bad-imports": 2, // 0 : OFF, 1 : WARN, 2 : ERROR
  },
};
