# eslint-config-opengovsg

This package provides [Open Government Product](http://open.gov.sg/)'s base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-opengovsg@latest" peerDependencies
  ```

  or use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-opengovsg
  ```

Add `"extends": "eslint-config-opengovsg"` to `.eslint.config.js`.
