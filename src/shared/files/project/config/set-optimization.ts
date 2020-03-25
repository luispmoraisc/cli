#!/usr/bin/env node

module.exports = () => {
  return `const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => {
  return {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        styles: {
          name(module, chunks) {
            const allChunksNames = chunks.map(item => item.name).join('~');
            return allChunksNames;
          },
          test: /\\.(s*)css\$/,
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  };
};
`;
};
