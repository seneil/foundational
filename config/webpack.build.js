const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');

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
              'react-hot-loader/babel',
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
    new webpack.HotModuleReplacementPlugin(),
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
      theme_color: '#ffffff',
      background_color: '#80cbc4',
      icons: [{
        src: path.resolve('application/view/images/icon.png'),
        sizes: [192, 256],
      }, {
        src: path.resolve('application/view/images/large-iconlarge.png'),
        sizes: [1024],
      }],
    }),
    new OfflinePlugin({
      publicPath: '/',
      safeToUseOptionalCaches: true,
      caches: {
        main: [
          'application.bundle.js',
          'icon_*.png',
          'manifest.*.json',
        ],
        additional: [
          ':externals:',
        ],
        optional: [
          ':rest:',
        ],
      },
      externals: [
        '/',
      ],
      ServiceWorker: {
        events: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['application'],
      inject: true,
      favicon: path.join(view, 'favicon.ico'),
      title: 'Link Keeper',
      template: path.join(view, 'index.html'),
    }),
  ];

  config.devServer = {
    contentBase: application,
    clientLogLevel: 'info',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
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
