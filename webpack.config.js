const path = require('path')

const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname + 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './',
      port: 3000
    },
    module: {rules},
  };