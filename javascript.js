const { resolveConfig } = require('./utils/prettier')
/**
 * Base JavaScript config does 2 things:
 * - Apply basic recommended rule sets
 * - Fix imports
 */
module.exports = {
  root: true,
  plugins: ['import', 'prettier', 'simple-import-sort'],
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    jest: true,
    node: true,
  },
  // https://github.com/eslint/espree#options
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    // simple-import-sort does not have a preset. Below is the default from
    // https://github.com/lydell/eslint-plugin-simple-import-sort#usage
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'prettier/prettier': ['error', resolveConfig()],
  },
}
