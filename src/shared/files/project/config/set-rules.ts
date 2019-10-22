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
                                targets: {
                                    browsers: ['last 2 versions', 'ie >= 11']
                                },
                                corejs : '2.0.0',
                                modules: false,
                                useBuiltIns: 'usage'
                            }
                        ]
                    ]
                }
            },
            {
                test: /\\.(woff(2)?|ttf|eot|svg)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/font',
                        emitFile: true
                    }
                }]
            },
            {
                test: /\\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options : {
                            publicPath: '/',
                            hmr: process.env.NODE_ENV === 'development'							
                        }
                    },
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                    'resolve-url-loader'
                ]
            },
            {
                test: /\\.(png|jpg|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',							
                        outputPath: 'assets/img',
                        publicPath: '../img',
                        emitFile: true							
                    }
                }]
            }				
        ]
    }
}`;
};