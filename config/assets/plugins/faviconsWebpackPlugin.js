const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = () => new FaviconsWebpackPlugin({
  logo: path.resolve('application/view/images/icon.png'),
  persistentCache: true,
  inject: true,
  title: 'Link Keeper',
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
  },
});
