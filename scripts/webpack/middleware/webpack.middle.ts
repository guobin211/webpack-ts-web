import { Compiler } from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { HMR_PATH, DevEnvConfig } from "../../config/constants";

/**
 * webpack.middle
 *
 * @time 2021/3/23 16:10
 * @version 0.0.1
 */
export default function webpackMiddleware(
  compiler: Compiler,
  env: DevEnvConfig
) {
  const { ENTRY_MAP, PUBLIC_PATH } = env;
  const devMiddlewareOptions: webpackDevMiddleware.Options = {
    publicPath: PUBLIC_PATH,
    stats: "minimal",
    writeToDisk: true,
  };

  const hmr: webpackHotMiddleware.MiddlewareOptions[] = [];
  for (const entryKey in ENTRY_MAP) {
    const [dir] = entryKey.split("/");
    hmr.push({
      path: `${HMR_PATH}/${dir}`,
      heartbeat: 2000,
    });
  }

  return [
    webpackDevMiddleware(compiler, devMiddlewareOptions),
    ...hmr.map((el) => webpackHotMiddleware(compiler, el)),
  ];
}
