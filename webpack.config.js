const path = require('path');

module.exports = {
  entry: './webpack/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webpack/dist'),
  },
  target: ['web', 'es6'],
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              "@babel/env",
              {
                "targets": {
                  "edge": "17",
                  "firefox": "60",
                  "chrome": "67",
                  "safari": "11.1",
                },
                "useBuiltIns": "usage",
                "corejs": {
                  "version": 3.10
                }
              }
            ]],
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
