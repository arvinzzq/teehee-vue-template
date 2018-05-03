const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  entry: {
    bundle: './src/App.vue'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'App.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: 'vue'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
