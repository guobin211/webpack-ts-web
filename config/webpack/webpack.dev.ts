/**
 * webpack.dev
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:14
 * @version
 */
import merge from 'webpack-merge';
import { getPlugins } from './plugins';
import { webpackCommon } from './webpack.common';
import { Devtools } from './devtools';

export const devConfig = merge(webpackCommon, {
  mode: 'development',
  devtool: Devtools.inline,
  plugins: getPlugins(),
});
