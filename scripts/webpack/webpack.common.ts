import { Configuration } from "webpack";
import { getPlugins } from "./get-plugins";
import { DevEnvConfig, ROOT_DIR } from "../config/constants";
import { getOutputConfig } from "./get-output-config";

/**
 * webpack.common
 */
export function getCommonConfig(env: DevEnvConfig): Configuration {
  const { ENTRY_MAP } = env;
  return {
    cache: true,
    context: ROOT_DIR,
    entry: ENTRY_MAP,
    output: getOutputConfig(env),
    resolve: {
      extensions: [".js", ".tsx", ".ts", ".json"],
    },
    plugins: getPlugins(env),
  };
}
