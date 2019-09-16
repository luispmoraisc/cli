module.exports = () => {
	return `
const path = require('path');
const Dotenv = require('dotenv-webpack');
const rules = require('./webpack.rules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const dot = new Dotenv({
	path: './.env'
});

module.exports = (env, args) => {
	let ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\"]/g, '');

	let config = {
		entry: {
			'main': './src/main.js'		
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].[hash:6].js',
			publicPath: ##ASSETS_URL##
		},
		module: rules,
		plugins: [
			dot,
			new ExtractTextPlugin('assets/css/[name].[hash:6].css'),
			new HtmlWebpackPlugin({
				filename: './index.html',
				template: './src/index.html',
				chunks: ['main']
			}),
			new webpack.SourceMapDevToolPlugin({})
		]
	}

	return config;
}
	`;
}
