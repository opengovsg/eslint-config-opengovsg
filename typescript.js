module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    './javascript',

    // https://typescript-eslint.io/linting/configs#recommended-configurations
    // recommends most projects to use `recommended-requiring-type-checking`
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
}
