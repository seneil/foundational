const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = () => new WebpackPwaManifest({
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
});
