# eslint-config-opengovsg

This package provides [Open Government Product](http://open.gov.sg/)'s base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-config-standard`.

Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@opengovsg/eslint-config-opengovsg@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @opengovsg/eslint-config-opengovsg
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@opengovsg/eslint-config-opengovsg;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @opengovsg/eslint-config-opengovsg
  ```

Add `"extends": "@opengovsg/eslint-config-opengovsg"` to your .eslintrc.

Instructions derived from [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).
