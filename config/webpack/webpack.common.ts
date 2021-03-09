import json5 from 'json5';
import { Configuration } from 'webpack';
import { resolve } from '../@node-help';
import { PROJECT_ROOT } from '../@node-constants';
import { getCssLoader } from '../utils';

/**
 * webpack.common
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:13
 * @version
 */

const webpackCommon: Configuration = {
  cache: true,
  context: PROJECT_ROOT,
  entry: {
    home: resolve(PROJECT_ROOT, 'pages', 'support-doc', 'index.tsx'),
    polyfills: resolve(PROJECT_ROOT, 'pages', 'polyfills.ts')
  },
  output: {
    publicPath: '/',
    path: resolve(PROJECT_ROOT, 'dist'),
    clean: true,
    pathinfo: false,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    usedExports: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': resolve(PROJECT_ROOT, 'shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: getCssLoader(0),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoader(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoader(2),
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};

export {
  webpackCommon,
};
