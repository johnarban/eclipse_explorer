/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  // add that rule where _ variables can be unused
  rules: {
    "indent": ["error", 2],
    "@typescript-eslint/naming-convention": [
      "error", {
        selector: ["variable", "memberLike", "function"],
        format: ["camelCase"],
        leadingUnderscore: "allow"
      },
      {
        selector: ["variable"],
        modifiers: ["global", "const"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow"
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "allow"
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember"
        ],
        format: null,
        modifiers: ["requiresQuotes"]
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error", {
        "args": "all",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/semi": "error",
    "vue/multi-word-component-names": "off"
  }
};