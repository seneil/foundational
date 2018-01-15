const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

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

  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules(?!\/webpack-dev-server)/, /public/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: [
              'transform-object-rest-spread',
              ['babel-plugin-styled-components', {
                preprocess: true,
              }],
            ],
          },
        }],
      },
    ],
  };

  config.plugins = [
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(output, {
      verbose: true,
      allowExternal: true,
    }),
    new WebpackPwaManifest({
      name: 'Link Keeper',
      short_name: 'Link Keeper',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      background_color: '#80cbc4',
      icons: [{
        src: path.resolve('application/view/images/icon.png'),
        sizes: [192, 256],
      }, {
        src: path.resolve('application/view/images/large-iconlarge.png'),
        sizes: [1024],
      }],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['application'],
      inject: true,
      title: 'Link Keeper',
      template: path.join(view, 'index.html'),
    }),
  ];

  return config;
};
