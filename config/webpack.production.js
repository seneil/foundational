const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        exclude: [/node_modules(?!\/webpack-dev-server)/, /public/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: [
              'transform-object-rest-spread',
            ],
          },
        }],
      },
    ],
  };

  config.plugins = [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['application'],
      inject: true,
      title: 'Link Keeper',
      template: path.join(application, 'view/index.html'),
    }),
  ];

  return config;
};
