module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    // We use React 17 onwards, and so we do not
    // need React to be in-scope for React components.
    // Include `react/jsx-runtime` to reflect this.
    // See https://github.com/jsx-eslint/eslint-plugin-react/#configuration-legacy-eslintrc
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
