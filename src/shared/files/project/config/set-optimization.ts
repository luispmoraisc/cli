#!/usr/bin/env node

module.exports = () => {
    return `const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ( entry ) => {
    return {
        minimizer : [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks : {
            cacheGroups : {
                styles : {
                    name : entry,
                    test: /\\.(s*)css$/,
                    chunks : 'all',
                    enforce : true
                },
                commons : {
                    test : /[\\\\/]node_modules[\\\\/]/,
                    name : 'vendors',
                    chunks : 'all'
                }
            }
        }   
    };
}`;
};