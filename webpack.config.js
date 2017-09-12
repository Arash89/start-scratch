const {resolve} = require('path');

module.exports = () => {
	return {
		context: resolve('src'),
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
console.log('Salam', resolve(__dirname, 'src'));