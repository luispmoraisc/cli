#!/usr/bin/env node

module.exports = () => {
  return `const path = require('path');
const moduleRules = require('./webpack.rules');
const Dotenv = require('dotenv-webpack');

const dot = new Dotenv({
  path: './.env',
});

module.exports = (env, args) => {
  const ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\\\"]/g, '');
  const prepared = moduleRules();
  const config = {
    mode: 'development',
    entry: prepared.entry,
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'assets/js/[name].[hash:6].js',
      pathinfo: false,
    },
    devtool: 'eval-source-map',
    optimization: prepared.optimization,
    module: prepared.rules,
    plugins: prepared.plugins,
  };

  if (args.mode === 'development') {
    config.devServer = {
      compress: true,
    };
  }

  if (args.mode !== 'development') {
    config.output['publicPath'] = \`\${ASSETS_URL}\`;
  }

  return config;
};
`;
};
