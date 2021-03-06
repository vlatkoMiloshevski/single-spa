const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		singleSpaEntry: 'src/singleSpaEntry.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../portal/release/app3'),
		libraryTarget: 'umd',
		library: 'app3'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.html$/,
				exclude: /node_modules|svelte/,
				loader: 'html-loader',
			},
			{
				test: /\.(jpe?g|png|webp|gif|otf|ttf|woff2?|ani)$/,
				loader: "url-loader",
				options: {
					name: "[name].[ext]",
					limit: 10000,
					publicPath: '/app3/'
				}
			},
			{
				test: /\.(jpe?g|png|webp|gif|otf|ttf|woff2?|ani)$/,
				loader: "url-loader",
				options: {
					name: "[name].[ext]",
					limit: 10000,
					publicPath: '/app3/'
				}
			},
		],
	},
	resolve: {
		"extensions": [
			".js"
		],
		modules: [
			__dirname,
			'node_modules',
		],
	},
	devtool: 'none',
	externals: [
	],
	plugins: [

	],
};
