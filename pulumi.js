module.exports = {
  plugins: ['@pulumi', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  // Pulumi does not have a recommended rule set, otherwise this portion should never exist
  rules: {
    // Apply no-output-in-template-literal since it's not enabled by default
    '@pulumi/no-output-in-template-literal': 'error',
    // Some XxxArgs definitions are written as empty interfaces
    '@typescript-eslint/no-empty-interface': 'off',
    // Sometimes `const xxx = new Resource('xxx')` makes the code more readable, despite not using `xxx` afterwards
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
