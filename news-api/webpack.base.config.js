const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  js: path.resolve(__dirname, 'src/js'),
  scss: path.resolve(__dirname, 'src/scss')
};

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: {
    app: path.join(paths.js, 'index.js')
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: {
                  autoprefixer: {
                    add: true,
                    remove: true,
                    browsers: ['last 3 versions'],
                  },
                  discardComments: {
                    removeAll : true,
                  },
                  sourcemap: true,
                }
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [paths.scss]
              }
          }],
          fallback: 'style-loader'
        })
      },
    ]
  }
};

module.exports = config;
