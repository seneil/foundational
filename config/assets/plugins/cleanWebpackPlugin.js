const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = params => new CleanWebpackPlugin(params.output, {
  verbose: true,
  allowExternal: true,
});
