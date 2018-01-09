const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.join(__dirname, '../');
const application = path.join(root, 'application');

module.exports = () => {
  const config = {
    context: application,
    entry: {
      application: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(root, 'application/index'),
      ],
    },
    resolve: {
      alias: {
        application,
      },
    },
    output: {
      path: path.join(root, 'public'),
      filename: '[name].bundle.js',
    },
  };

  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
    ],
  };

  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['application'],
      inject: true,
      title: 'Link Keeper',
      template: path.join(application, 'view/index.html'),
    }),
  ];

  config.devServer = {
    contentBase: application,
    clientLogLevel: 'info',
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/api/v1',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  };

  return config;
};
