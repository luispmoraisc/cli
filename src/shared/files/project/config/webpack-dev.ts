#!/usr/bin/env node

module.exports = () => {
    return `const path = require('path');
const Dotenv = require('dotenv-webpack');
const moduleRules = require('./webpack.rules');

const dot = new Dotenv({
    path: './.env'
});

module.exports = (env, args) => {
    let ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\\\"]/g, '');
    let prepared = moduleRules(env, args);
    let config = {
        cache : true,
        entry : prepared.entry,
        output : {
            path: path.resolve(__dirname, '../dist'),
            filename: 'assets/js/[name].[hash:6].js',
            //publicPath: \${ASSETS_URL}
        },
        optimization : prepared.optimization,
        module : prepared.rules,
        plugins : prepared.plugins 
    }

    return config;
}`;
};