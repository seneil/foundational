const webpack = require('webpack');
const config = require('config');

const application = config.get('application');

module.exports = () => new webpack.DefinePlugin({
  APPLICATION: application,
});
