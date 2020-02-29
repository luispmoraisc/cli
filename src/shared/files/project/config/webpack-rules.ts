#!/usr/bin/env node

module.exports = () => {
  return `const setEntry = require('./setEntry');
const setPlugins = require('./setPlugins');
const setRules = require('./setRules');
const setOptimization = require('./setOptimization');

module.exports = () => {
  const getEntry = setEntry();
  const getPlugins = setPlugins();
  const getRules = setRules();
  const getOptimization = setOptimization();
  return {
    entry: getEntry,
    plugins: getPlugins,
    rules: getRules,
    optimization: getOptimization,
  };
};
`;
};
