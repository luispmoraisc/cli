#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "const Dotenv = require('dotenv-webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst webpack = require('webpack');\n\nconst dot = new Dotenv({\n    path : './.env'\n});\n\nmodule.exports = (entry) => {    \n    //let favicon = './src/favicon.ico';\n    let html = new HtmlWebpackPlugin({\n        filename : './index.html',\n        template : './src/index.html',\n        chunks : [entry, 'vendors'],        \n        //favicon : favicon,\n        minify : {\n            collapseWhitespace : true,\n            removeComments : true,\n            removeRedundantAttributes : true            \n        }\n    });    \n    return [\n        dot,\n        new MiniCssExtractPlugin({\n            filename : 'assets/css/[name].[hash:6].css',            \n        }),\n        html,       \n    ];\n}";
};
