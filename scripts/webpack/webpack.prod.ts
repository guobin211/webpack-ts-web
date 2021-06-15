import merge from "webpack-merge";
import { resolve } from "path";
import { DevEnvConfig, ROOT_DIR } from "../config/constants";
import { getCommonConfig } from "./webpack.common";
import { getLoader } from "./get-loader";

export function getProdConfig(env: DevEnvConfig) {
  const common = merge(getCommonConfig(env), {
    externals: {
      axios: "axios",
      react: "React",
      "react-dom": "ReactDOM",
      "react-redux": "ReactRedux",
      "react-router-dom": "ReactRouterDOM",
    },
  });
  const prodBabel = [
    {
      test: /\.(tsx?|m?jsx?)$/,
      loader: "babel-loader",
      exclude: [/node_modules[\\/]/],
    },
  ];
  return merge(common, {
    mode: "production",
    devtool: undefined,
    output: {
      clean: true,
      filename: () => "[name].[contenthash].js",
      path: resolve(ROOT_DIR, "dist"),
    },
    target: ["web", "es5"],
    module: {
      rules: prodBabel.concat(getLoader()),
    },
    optimization: {
      runtimeChunk: "single",
    },
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000,
    },
  });
}
