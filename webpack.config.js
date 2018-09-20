const path = require('path');

const HttpProxyMiddleware = require('http-proxy-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var BUILD_DIR = path.resolve(__dirname, './build');

module.exports = {
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins:[HtmlWebpackPluginConfig],
}