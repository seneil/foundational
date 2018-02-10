const config = require('config');

const { endpoint } = config.get('api');

module.exports = params => ({
  contentBase: params.application,
  clientLogLevel: 'info',
  historyApiFallback: true,
  hot: true,
  compress: true,
  host: '0.0.0.0',
  port: 3000,
  proxy: {
    '/api': {
      target: `${endpoint}/v1`,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
