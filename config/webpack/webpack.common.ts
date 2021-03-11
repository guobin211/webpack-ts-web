import json5 from 'json5';
import { Configuration } from 'webpack';
import { getEntry, resolve } from '../@node-help';
import { PROJECT_ROOT } from '../@node-constants';
import { getCssLoader } from '../utils';
import { getPlugins } from './plugins';

const entryMap = getEntry();

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
  entry: entryMap,
  output: {
    publicPath: '/',
    path: resolve(PROJECT_ROOT, 'build'),
    clean: true,
    pathinfo: false,
    assetModuleFilename: (pathInfo) => {
      if (pathInfo.filename) {
        const fileName = pathInfo.filename?.replace('src/', 'images/').replace('/assets', '');
        if (fileName) {
          const dotIndex = fileName?.lastIndexOf('.');
          const b = fileName.slice(0, dotIndex);
          const a = fileName.slice(dotIndex, fileName.length);
          return `${b}-${pathInfo.contentHash}${a}`;
        }
      }
      return '';
    }
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
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  plugins: getPlugins(entryMap)
};

export {
  webpackCommon,
};
