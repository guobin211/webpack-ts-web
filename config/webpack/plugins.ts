import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin  from 'copy-webpack-plugin';
import webpack, { EntryObject, HotModuleReplacementPlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { __DEV__, PROJECT_ROOT } from '../@node-constants';
import { resolve } from '../@node-help';

const copyConfig: any = {
  patterns: [
    {
      from: resolve(PROJECT_ROOT, 'static'), to: resolve(PROJECT_ROOT, 'build', 'static')
    },
  ],
}

const plugins = [
  new webpack.ProgressPlugin(),
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      memoryLimit: __DEV__ ? 2048 : 3096,
      configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
    },
  }),
  new CopyWebpackPlugin(copyConfig),
];

/**
 * plugins
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/9 13:07
 * @version
 */
export function getPlugins(entry: EntryObject) {
  for (const key of Object.getOwnPropertyNames(entry)) {
    if (key.startsWith('pages/')) {
      const [, name] = key.split('/');
      plugins.push(
        new HtmlWebpackPlugin({
          filename: `${name}.html`,
          template: `src/${name}/index.html`,
          chunks: [key, 'vendors', 'runtime', 'polyfill']
        })
      )
    }
  }
  if (__DEV__) {
    plugins.push(new HotModuleReplacementPlugin());
    return plugins;
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      }),
      new WebpackManifestPlugin({}),
    )
    return plugins;
  }
}
