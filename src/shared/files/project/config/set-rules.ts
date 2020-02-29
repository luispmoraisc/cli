#!/usr/bin/env node

module.exports = () => {
  return `const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    rules: [
      {
        test: /\\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
          ],
        },
      },
      {
        test: /\\.(woff(2)?|ttf|eot)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/font',
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
          'resolve-url-loader',
        ],
      },
      {
        test: /\\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: '../img',
              emitFile: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeTitle: true }, { convertColors: { shorthex: false } }, { convertPathData: false }],
            },
          },
        ],
      },
      {
        test: /\\.(?:png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: '../img',
              emitFile: true,
            },
          },
        ],
      },
    ],
  };
};
`;
};
