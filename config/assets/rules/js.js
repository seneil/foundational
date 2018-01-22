module.exports = () => ({
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
});
