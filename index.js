module.exports = {
  "extends": [
    "eslint:recommended",
    "google",
    "prettier"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "no-unused-vars": ["error"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "radix": ["error", "as-needed"],
    "require-jsdoc": ["warn"],
    "no-console": ["error", {"allow": ["warn", "error"]}]
  }
}