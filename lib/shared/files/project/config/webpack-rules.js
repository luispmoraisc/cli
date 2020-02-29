#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const setEntry = require('./setEntry');\nconst setPlugins = require('./setPlugins');\nconst setRules = require('./setRules');\nconst setOptimization = require('./setOptimization');\n\nmodule.exports = () => {\n  const getEntry = setEntry();\n  const getPlugins = setPlugins();\n  const getRules = setRules();\n  const getOptimization = setOptimization();\n  return {\n    entry: getEntry,\n    plugins: getPlugins,\n    rules: getRules,\n    optimization: getOptimization,\n  };\n};\n";
};
