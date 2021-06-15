import { resolve } from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { DevEnvConfig, isProductionNode, ROOT_DIR } from "../config/constants";
import { getWebpackInject } from "./get-webpack-inject";

/**
 * getCommonPlugins
 *
 * @time 2021/3/19 17:28
 * @version 0.0.1
 */
function getCommonPlugins(env: DevEnvConfig, isProd: boolean): any[] {
  return [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin(getWebpackInject(env, isProd)),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: isProd ? 3096 : 2048,
        configFile: resolve(ROOT_DIR, "tsconfig.web.json"),
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(ROOT_DIR, "static"),
          to: resolve(ROOT_DIR, "dist", "static"),
        },
      ],
    }),
  ];
}

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: () => "[name].[contenthash].css",
  }),
  new WebpackManifestPlugin({}),
  new webpack.AutomaticPrefetchPlugin(),
];

/**
 * @param env
 */
export function getPlugins(env: DevEnvConfig) {
  const isProd = isProductionNode();
  const commonPlugins = getCommonPlugins(env, isProd);
  if (isProd) {
    commonPlugins.push(...prodPlugins);
  } else {
    commonPlugins.push(new webpack.HotModuleReplacementPlugin());
  }
  for (const [key] of Object.entries(env.ENTRY_MAP)) {
    const [name] = key.split("/");
    commonPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `src/react-pages/${name}/index.html`,
        chunks: [key, "runtime"],
        inject: "body",
      })
    );
  }
  return commonPlugins;
}
