#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const TerserJSPlugin = require('terser-webpack-plugin');\nconst OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');\n\nmodule.exports = ( entry ) => {\n    return {\n        minimizer : [\n            new TerserJSPlugin({}),\n            new OptimizeCSSAssetsPlugin({})\n        ],\n        splitChunks : {\n            cacheGroups : {\n                styles : {\n                    name : entry,\n                    test: /\\.(s*)css$/,\n                    chunks : 'all',\n                    enforce : true\n                },\n                commons : {\n                    test : /[\\\\/]node_modules[\\\\/]/,\n                    name : 'vendors',\n                    chunks : 'all'\n                }\n            }\n        }   \n    };\n}";
};
