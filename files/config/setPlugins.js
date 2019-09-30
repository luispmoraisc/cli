module.exports = () => {
    return `
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const dot = new Dotenv({
    path : './.env'
});

module.exports = (entry) => {    
    //let favicon = './src/favicon.ico';
    let html = new HtmlWebpackPlugin({
        filename : './index.html',
        template : './src/index.html',
        chunks : [entry, 'vendors'],        
        //favicon : favicon,
        minify : {
            collapseWhitespace : true,
            removeComments : true,
            removeRedundantAttributes : true            
        }
    });    
    return [
        dot,
        new MiniCssExtractPlugin({
            filename : 'assets/css/[name].[hash:6].css',            
        }),
        html,       
    ];
}    
    `;
}