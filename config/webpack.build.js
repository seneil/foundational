const path = require('path');
const webpack = require('webpack');

const offlinePlugin = require('./assets/plugins/offlinePlugin');
const webpackPwaManifest = require('./assets/plugins/webpackPwaManifest');
const htmlWebpackPlugin = require('./assets/plugins/htmlWebpackPlugin');
const cleanWebpackPlugin = require('./assets/plugins/cleanWebpackPlugin');

const ruleJs = require('./assets/rules/js');
const devServer = require('./assets/config/devServer');

const root = path.join(__dirname, '../');
const application = path.join(root, 'application');
const output = path.join(root, 'public');
const view = path.join(application, 'view');

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
      path: output,
      filename: '[name].bundle.js',
    },
  };

  config.module = { rules: [ruleJs()] };

  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    cleanWebpackPlugin({ output }),
    webpackPwaManifest(),
    offlinePlugin(),
    htmlWebpackPlugin({ view }),
  ];

  config.devServer = devServer({ application });

  return config;
};
