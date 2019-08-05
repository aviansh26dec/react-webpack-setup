const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: ['react-hot-loader/patch',path.join(__dirname,'src','index.js')],
  output: {
    path: path.join(__dirname,'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname,'src'),'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./public/index.html'),
      favicon: './public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  devServer: {
    host: '192.168.1.143',
    port: 1987
  },
};