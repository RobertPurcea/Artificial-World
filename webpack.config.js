var path = require('path');


module.exports = {
	entry: path.resolve(__dirname, './src/app.js'),

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, './dist')
	},

	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		clientLogLevel: "none",
		noInfo: true,
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			options: { presets: ['es2015'] },
			exclude: [/node_modules/]
		}, {
			test: /\.html$/,
			loader: "raw-loader"
		}, {
			test: /\.(sass|scss)$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},

	watch: true
}
