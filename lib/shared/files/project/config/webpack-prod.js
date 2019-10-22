#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const merge = require('webpack-merge');\nconst dev = require('./webpack.dev');\nconst UglifyJsPlugin = require('uglifyjs-webpack-plugin');\nconst Dotenv = require('dotenv-webpack');\nconst BrotliPlugin = require('brotli-webpack-plugin');\nconst webpack = require('webpack');\n\nconst dot = new Dotenv({\n    path: './.env'\n});\n\n\nmodule.exports = (env, args) => {\n    let config = {\n        plugins: [\n            new UglifyJsPlugin({\n                test: /\\.js($|\\?)/i\n            }),\n            new webpack.optimize.ModuleConcatenationPlugin(),\n            new BrotliPlugin({\n                asset : '[path].br[query]',\n                test : /\\.(js|css|html|svg)$/,\n                threshold : 10240,\n                minRatio : 0.8\n            })\n        ]\n    }\n\n    const develop = dev(env, args);\n    const mergeConfig = merge(develop, config);\n    return mergeConfig;\n}";
};
