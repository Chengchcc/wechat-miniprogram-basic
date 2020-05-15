const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
      },
      {
        test: /\.(sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                resolve(src, './assets/styles/global.scss')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './app.*',
        to: '.',
        ignore: ['*.ts', '*.scss', '*.sass']
      },
      {
        from: './pages/',
        to: './pages/',
        toType: 'dir',
        ignore: ['*.ts', '*.scss', '*.sass']
      },
      {
        from: './assets/',
        to: './assets/',
        toType: 'dir'
      }
    ]),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].wxss",
      chunkFilename: "[id].wxss"
    })
  ],
  mode: 'production'
}
