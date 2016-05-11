var precss = require('precss');
var cssnext = require('postcss-cssnext');
var lost = require('lost');

module.exports = {
    entry:
        './src/index.jsx', // Your appʼs entry point

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
                test:   /\.css$/,
//                loader: "style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss"
                loader: "style!css?modules&importLoaders=1&localIdentName=[path]-[name]_[local]_[hash:base64:5]!postcss"
            }
        ]
    },
    postcss: function () {
        return [ precss, cssnext, lost];
    }
};