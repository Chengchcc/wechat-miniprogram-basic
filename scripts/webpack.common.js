const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const src = resolve(__dirname, '../src')

module.exports = {
  context: src,
  entry: {
    'app': './app.ts',
    'pages/index/index': './pages/index/index.ts',
    'pages/logs/logs': './pages/logs/logs.ts'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      '@': src,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: ['babel-loader'],
        exclude: /\/node_modules\//
      }
    ]

  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './app.*',
        to: '.',
        ignore: ['*.ts']
      },
      {
        from: './pages/',
        to: './pages/',
        toType: 'dir',
        ignore: ['*.ts']
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
