// .eslintrc.js
module.exports = {
    root: true,
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
      parser: "babel-eslint",
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
      "prettier/prettier": ['error', {
        singleQuote: false,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      }]
    },
  };