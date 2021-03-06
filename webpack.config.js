var webpack = require('webpack');
const {resolve} = require('path');

module.exports = () => {
	return {
		context: resolve(__dirname, 'src'),
		entry: './index.js',
		output: {
			filename: 'bundle.js',
			path: resolve('dist'),
			publicPath: '/dist/',
		},
		module: {
			loaders: [
				{test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
			]
		},
		watch: true
	}
}
