/**
 * webpack.prod
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:13
 * @version
 */
import merge from 'webpack-merge';
import { Devtools } from './devtools';
import { getPlugins } from './plugins';
import { webpackCommon } from './webpack.common';

export const prodConfig = merge(webpackCommon, {
  mode: 'production',
  cache: false,
  devtool: Devtools.file,
  output: {
    publicPath: '/',
    clean: true,
    filename: '[name]-[contenthash].js',
    hashSalt: 'official-website-pc',
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
  },
  plugins: getPlugins()
});
