module.exports = {
  "extends": [
    "standard"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": ["error", {"allow": ["warn", "error"]}],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "only-multiline"
    }],
    "newline-per-chained-call": ["error"],
  }
}
