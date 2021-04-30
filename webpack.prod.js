const CssMinimizerWebbpackPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /.s?css$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: { importLoaders: true }
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: { plugins: ['autoprefixer'] }
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      type: 'asset'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'main-[fullhash].min.css' }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebbpackPlugin()]
  }
})
