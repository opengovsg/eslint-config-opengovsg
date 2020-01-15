module.exports = {
  "extends": [
    "standard"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "indent": [
      "error",
      2
    ],
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "semi": [
      "error",
      "never"
    ]
  }
}
