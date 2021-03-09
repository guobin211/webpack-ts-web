import { loader as MiniCssExtractLoader } from 'mini-css-extract-plugin';
import { __DEV__ } from '../@node-constants';

/**
 * get-css-loader
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/9 10:07
 * @version
 */
export function getCssLoader(importLoaders: number) {
  return [
    __DEV__ ? 'style-loader' : MiniCssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        modules: false,
        sourceMap: true,
        importLoaders,
      },
    },
    {
      loader: 'postcss-loader',
      options: { sourceMap: true },
    },
  ];
}