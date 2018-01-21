const OfflinePlugin = require('offline-plugin');

module.exports = () => new OfflinePlugin({
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
    prefetchRequest: { credentials: 'same-origin' },
  },
});
