const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = params => new HtmlWebpackPlugin({
  filename: 'index.html',
  chunks: ['application'],
  inject: true,
  favicon: path.join(params.view, 'favicon.ico'),
  title: 'Link Keeper',
  template: path.join(params.view, 'index.html'),
});
