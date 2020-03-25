#!/usr/bin/env node

module.exports = () => {
  return `const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, args) => {
  const configProd = {
    mode: 'production',
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\\.(js|css|html|svg)$/,
        threshold: 1024,
        minRatio: 0.8,
        cache: true,
      }),
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\\.(js|css|html|svg)$/,
        threshold: 1024,
        minRatio: 0.8,
      }),
    ],
    performance: {
      hints: false,
    },
    devtool: false,
  };

  const configDev = dev(env, args);
  const mergeConfig = merge(configDev, configProd);
  return mergeConfig;
};
`;
};
