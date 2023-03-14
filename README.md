# eslint-config-opengovsg

## Goal

The goal of this package is to **provide reasonable defaults for most common scenarios, so that developers can start building** without worrying about linting configurations.

## Explanation

ESLint is a tool to "find and fix problems in your JavaScript code" (from [https://eslint.org/](https://eslint.org/)). We use ESLint to help us write better code. However, we do not want to invest efforts into the fine-tuning of detailed configurations, as those efforts can be better invested into building other things.

As a result, we will NEVER have self-defined opinions in the library, which means `rules` section should not exist in the configs. Instead, only `recommended` rule sets from the biggest linting libraries (e.g. `eslint:recommended`) will be used. Essentially:

1. We fully trust the community out there to maintain a reasonable set of recommended rules, so that most common error-prone patterns are covered
1. When something really does not make sense in `recommended`, there are 2 options:
   - influence and change the upstream `recommended` rule set
   - or do overrides in `.eslintrc` in our own repositories, NOT here. If a rule does not make sense to the broader community thus cannot enter the `recommended` rule set, it would not make sense to be here either.

## Usage

To install (including all the peer dependencies as `devDependencies`):

```sh
npx install-peerdeps --dev eslint-config-opengovsg
```

Depending on the usage, put one of the following into `.eslintrc`:

- Catch-all rule that will lint `.js`, `.ts`, `.jsx` and `.tsx` files (`{"extends": ["opengovsg"]}`)
- TypeScript (`{"extends": ["opengovsg/typescript"]}`)
- React (`{"extends": ["opengovsg/typescript", "opengovsg/react"]}` or `{"extends": ["opengovsg/javascript", "opengovsg/react"]}`)
- Pulumi (`{"extends": ["opengovsg/typescript", "opengovsg/pulumi"]}`)
- JavaScript (`{"extends": ["opengovsg/javascript"]}`)
