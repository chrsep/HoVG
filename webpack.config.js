module.exports = {
  entry: "./src/index.js", // Your appʼs entry point
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.pcss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1, modules: true } },
          { loader: "postcss-loader" }
        ]
      }
    ]
  }
}
