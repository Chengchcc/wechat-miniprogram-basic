const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const Webpack = require('webpack')
const WebpackDefinePlugin = Webpack.DefinePlugin;

const config = {
  mode: 'production',
  // optimization: {
  //   splitChunks: {
  //     minSize: 30,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'initial',
  //         priority: -10
  //       },
  //       common: {
  //         name: 'common',
  //         chunks: 'initial',
  //         minChunks: 2,
  //         minSize: 10000,
  //         priority: -20
  //       }
  //     }
  //   }
  // },
  plugins: [
    new WebpackDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // new Webpack.BannerPlugin({
    //   banner: `var common = require('./common.js');var vendor = require('./vendor.js');`,
    //   raw: true,
    //   include: 'app.js'
    // })
  ]
}

module.exports = WebpackMerge(config, commonConfig)
