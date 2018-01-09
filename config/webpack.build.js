const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.join(__dirname, '../');
const application = path.join(root, 'application');

module.exports = () => {
  const config = {
    context: application,
    entry: {
      application: [
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
          },
        }],
      },
    ],
  };

  config.plugins = [
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
    hot: false,
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
