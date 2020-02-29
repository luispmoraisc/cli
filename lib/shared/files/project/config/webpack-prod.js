#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const merge = require('webpack-merge');\nconst dev = require('./webpack.dev');\nconst BrotliPlugin = require('brotli-webpack-plugin');\nconst CompressionPlugin = require('compression-webpack-plugin');\n\nmodule.exports = (env, args) => {\n  const configProd = {\n    mode: 'production',\n    plugins: [\n      new CompressionPlugin({\n        filename: '[path].gz[query]',\n        algorithm: 'gzip',\n        test: /\\.(js|css|html|svg)$/,\n        threshold: 1024,\n        minRatio: 0.8,\n        cache: true,\n      }),\n      new BrotliPlugin({\n        asset: '[path].br[query]',\n        test: /\\.(js|css|html|svg)$/,\n        threshold: 1024,\n        minRatio: 0.8,\n      }),\n    ],\n    performance: {\n      hints: false,\n    },\n    devtool: false,\n  };\n\n  const configDev = dev(env, args);\n  const mergeConfig = merge(configDev, configProd);\n  return mergeConfig;\n};\n";
};
