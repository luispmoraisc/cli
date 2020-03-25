#!/usr/bin/env node

module.exports = () => {
  return `const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TextReplaceHtmlWebpackPlugin = require('text-replace-html-webpack-plugin');

const dot = new Dotenv({
  path: './.env',
});

const minify = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

module.exports = () => {
  const html = new HtmlWebpackPlugin({
    filename: './index.html',
    template: './src/index.html',
    chunks: ['main', 'vendors'],
    async: 'vendors',
    //favicon: './favicon.ico',
    minify,
  });

  const analytics = dot.definitions['process.env.ANALYTICS'].replace(/[\\\\"]/g, '');
  const scripts = new ScriptExtHtmlWebpackPlugin({
    sync: '[name]',
    defaultAttribute: 'async',
    preload: 'vendors',
  });

  return [
    dot,
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:6].css',
    }),
    html,
    new TextReplaceHtmlWebpackPlugin({
      replacementArray: [
        {
          searchString: '@@ANALYTICS',
          replace: analytics,
        },
      ],
    }),
    scripts,
  ];
};
`;
};
