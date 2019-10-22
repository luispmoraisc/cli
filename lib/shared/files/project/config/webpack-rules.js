#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const setEntry = require('./setEntry');\nconst setPlugins = require('./setPlugins');\nconst setRules = require('./setRules');\nconst setOptimization = require('./setOptimization');\n\nmodule.exports = (env, args) => {\n    let getEntry = setEntry(args.entry);\n    let getPlugins = setPlugins(args.entry); \n    let getRules = setRules();\n    let getOptimization = setOptimization( args.entry );\n    return {\n        entry : getEntry,\n        plugins : getPlugins,\n        rules : getRules,\n        optimization : getOptimization\n    }  \n}";
};
