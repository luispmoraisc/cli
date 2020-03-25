#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const TerserJSPlugin = require('terser-webpack-plugin');\nconst OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');\n\nmodule.exports = () => {\n  return {\n    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],\n    splitChunks: {\n      cacheGroups: {\n        styles: {\n          name(module, chunks) {\n            const allChunksNames = chunks.map(item => item.name).join('~');\n            return allChunksNames;\n          },\n          test: /\\.(s*)css$/,\n          chunks: 'all',\n          enforce: true,\n        },\n        vendors: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendors',\n          chunks: 'all',\n        },\n      },\n    },\n  };\n};\n";
};
