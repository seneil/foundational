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
      target: 'http://localhost:3001/api/v1',
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
