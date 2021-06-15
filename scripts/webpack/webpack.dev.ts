import merge from "webpack-merge";
import { getCommonConfig } from "./webpack.common";
import { DevEnvConfig } from "../config/constants";
import { getLoader } from "./get-loader";

export const Devtools = {
  cheap: "eval-cheap-source-map",
  eval: "eval-source-map",
  inline: "inline-source-map",
  file: "source-map",
};

export function getDevConfig(env: DevEnvConfig) {
  return merge(getCommonConfig(env), {
    mode: "development",
    devtool: Devtools.inline,
    target: ["web"],
    module: {
      rules: [
        {
          test: /\.(tsx?|m?jsx?)$/,
          loader: "babel-loader",
          exclude: [/node_modules[\\/]/],
        },
        ...getLoader(),
      ],
    },
    resolve: {},
  });
}
