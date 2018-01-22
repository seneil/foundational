const path = require('path');

const offlinePlugin = require('./assets/plugins/offlinePlugin');
const uglifyJSPlugin = require('./assets/plugins/uglifyJSPlugin');
const webpackPwaManifest = require('./assets/plugins/webpackPwaManifest');
const htmlWebpackPlugin = require('./assets/plugins/htmlWebpackPlugin');
const cleanWebpackPlugin = require('./assets/plugins/cleanWebpackPlugin');
const faviconsWebpackPlugin = require('./assets/plugins/faviconsWebpackPlugin');

const ruleJs = require('./assets/rules/js');

const root = path.join(__dirname, '../');
const application = path.join(root, 'application');
const output = path.join(root, 'public');
const view = path.join(application, 'view');

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
      path: output,
      filename: '[name].bundle.js',
    },
  };

  config.module = { rules: [ruleJs()] };

  config.plugins = [
    uglifyJSPlugin(),
    cleanWebpackPlugin({ output }),
    webpackPwaManifest(),
    offlinePlugin(),
    htmlWebpackPlugin({ view }),
    faviconsWebpackPlugin(),
  ];

  return config;
};
