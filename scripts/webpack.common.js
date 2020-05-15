const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const src = resolve(__dirname, '../src')

module.exports = {
  context: src,
  entry: {
    'app': './app.js',
    'pages/index/index': './pages/index/index.js',
    'pages/logs/logs': './pages/logs/logs.js'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './app.*',
        to: '.',
        ignore: ['*.js']
      },
      {
        from: './pages/',
        to: './pages/',
        toType: 'dir',
        ignore: ['*.js']
      },
      {
        from: './assets/',
        to: './assets/',
        toType: 'dir'
      }
    ]),
    new CleanWebpackPlugin(),
  ],
  mode: 'production'
}
