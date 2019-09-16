module.exports = () => {
	return `
const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const dot = new Dotenv({
	path: './.env'
});


module.exports = (env, args) => {
	let config = {
		plugins: [
			new UglifyJsPlugin({
				test: /\\.js($|\\?)/i
			})
		]
	}

	const develop = dev(env, args);
	const mergeConfig = merge(develop, config);
	return mergeConfig;
}	
	`;
}