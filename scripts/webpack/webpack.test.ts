import { DevEnvConfig } from "../config/constants";
import merge from "webpack-merge";
import { getProdConfig } from "./webpack.prod";
import { Devtools } from "./webpack.dev";

export function getWebpackTestConfig(env: DevEnvConfig) {
  return merge(getProdConfig(env), {
    devtool: Devtools.file,
  });
}
