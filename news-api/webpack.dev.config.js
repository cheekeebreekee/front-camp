const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    openPage: 'localhost:8080',
    port: 8080
  }
});
