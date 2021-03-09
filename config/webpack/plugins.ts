import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { __DEV__, PROJECT_ROOT } from '../@node-constants';
import { resolve } from '../@node-help';

/**
 * plugins
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/9 13:07
 * @version
 */
export function getPlugins() {
  if (__DEV__) {
    return [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin({
                                       typescript: {
                                         memoryLimit: 1280,
                                         configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
                                       },
                                     }),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(),
    ];
  } else {
    return [
      new webpack.ProgressPlugin(),

      new ForkTsCheckerWebpackPlugin({
                                       typescript: {
                                         memoryLimit: 2048,
                                         configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
                                       },
                                     }),
      new MiniCssExtractPlugin({
                                 filename: 'css/[name].[contenthash].css',
                                 chunkFilename: 'css/[id].[contenthash].css',
                                 ignoreOrder: false,
                               }),
      new WebpackManifestPlugin({}),
      new HtmlWebpackPlugin(),
    ];
  }
}
