/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  // add that rule where _ variables can be unused
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error', 
      { 
        argsIgnorePattern: '^_' ,
        varsIgnorePattern: '^_'
      }],
  },
};