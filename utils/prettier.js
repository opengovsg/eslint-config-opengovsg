const { resolveConfig: resolvePrettierConfig } = require('prettier')
const { resolve } = require('path')

const DEFAULT_PATH = resolve(__dirname, '..', '.prettierrc')

/**
 * Resolve the relevant prettier config file for linting,
 * searching for one within the current working directory and
 * ancestors first. If none are found, use the default provided
 * by this package
 * @returns a Prettier configuration
 */
function resolveConfig() {
  const userProvidedConfig = resolvePrettierConfig.sync(process.cwd())
  return userProvidedConfig === null
    ? resolvePrettierConfig.sync(DEFAULT_PATH, { config: DEFAULT_PATH })
    : userProvidedConfig
}

module.exports = { resolveConfig }
