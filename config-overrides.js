// noinspection NpmUsedModulesInstalled
const { alias, aliasJest, configPaths } = require("react-app-rewire-alias");

const aliasMap = configPaths("./tsconfig.paths.json");

module.exports.webpack = config => {
  config.resolve.fallback = {
    // Add other fallbacks if necessary
  };
  config.plugins = [
    ...config.plugins,
  ];
  return alias(aliasMap)(config);
};

module.exports.jest = config => aliasJest(aliasMap)(config);
