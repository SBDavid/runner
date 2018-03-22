var path = require('path');
var os = require('os');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var config = {
  entry: './src/index.js',
  devtool: process.env.NODE_ENV == 'production' ? false : "source-map",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      pixi: path.join(__dirname, './node_modules/phaser/dist/pixi.js'),
      p2: path.join(__dirname, './node_modules/phaser/dist/p2.js')

    }
  },
  plugins: [],
  module: {
    rules: []
  }, 
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    inline: true,
    hot: false,
    allowedHosts: ['a.com'],
    port: 80
  }
};

if (process.env.NODE_ENV == 'production') {
  config.plugins = config.plugins.concat([
    new UglifyJsPlugin()
  ]);
  config.module.rules = config.module.rules.concat([
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]);
}

module.exports = config;