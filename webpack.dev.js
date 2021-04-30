const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: './public',
    port: 8080,
    hot: true,
    quiet: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /.s?css$/i,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: { plugins: ['autoprefixer'] }
        }
      }, {
        loader: 'sass-loader'
      }],
        exclude: /node_modules/
    }]
  }
})
