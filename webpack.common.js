const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'main-bundle-[fullhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true
  }
}
