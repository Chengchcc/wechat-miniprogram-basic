const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const Webpack = require('webpack')
const WebpackDefinePlugin = Webpack.DefinePlugin;

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new WebpackDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}

module.exports = WebpackMerge(config, commonConfig)