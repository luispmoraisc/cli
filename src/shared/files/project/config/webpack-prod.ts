#!/usr/bin/env node

module.exports = () => {
  return `const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BrotliPlugin = require('brotli-webpack-plugin');
const webpack = require('webpack');

const dot = new Dotenv({
    path: './.env'
});


module.exports = (env, args) => {
    let ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\"]/g, '');
    let config = {
        plugins: [
            new UglifyJsPlugin({
                test: /\\.js($|\\?)/i
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new BrotliPlugin({
                asset : '[path].br[query]',
                test : /\\.(js|css|html|svg)$/,
                threshold : 10240,
                minRatio : 0.8
            })
        ]
    }

    const develop = dev(env, args);
    develop.output.publicPath = \`\${ASSETS_URL}\`;
    const mergeConfig = merge(develop, config);
    return mergeConfig;
}`;
};
