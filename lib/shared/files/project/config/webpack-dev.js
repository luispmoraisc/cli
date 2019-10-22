#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const path = require('path');\nconst Dotenv = require('dotenv-webpack');\nconst moduleRules = require('./webpack.rules');\n\nconst dot = new Dotenv({\n    path: './.env'\n});\n\nmodule.exports = (env, args) => {\n    let ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\\\\"]/g, '');\n    let prepared = moduleRules(env, args);\n    let config = {\n        cache : true,\n        entry : prepared.entry,\n        output : {\n            path: path.resolve(__dirname, '../dist'),\n            filename: 'assets/js/[name].[hash:6].js',\n            //publicPath: ${ASSETS_URL}\n        },\n        optimization : prepared.optimization,\n        module : prepared.rules,\n        plugins : prepared.plugins \n    }\n\n    return config;\n}";
};
