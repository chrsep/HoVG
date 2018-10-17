var precss = require('precss');
var cssnext = require('postcss-cssnext');

module.exports = {
	entry: './src/index.js', // Your appʼs entry point

	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'] // 'babel-loader' is also a legal name to reference
			},
			{
				test: /\.pcss$/,
//                loader: "style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss"
				loader: "style!css?modules&importLoaders=1&localIdentName=[path]-[name]_[local]_[hash:base64:5]!postcss"
			}
		]
	},
	postcss: function () {
		return [precss, cssnext];
	}
};