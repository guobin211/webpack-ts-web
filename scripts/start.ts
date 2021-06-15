import express from "express";
import webpack from "webpack";
import { logger } from "./utils/logger";
import { setupMiddleWare } from "./webpack/middleware";
import { getDevConfig } from "./webpack/webpack.dev";
import { beforeBuild } from "./before-build";
import { afterBuild } from "./after-build";

/**
 * start
 */
export default async function start() {
  logger.success(`run start(): ${process.env.NODE_ENV}`);
  const { envConfig } = beforeBuild([], true);
  logger.success("EnvConfig");
  logger.info(envConfig);
  const webpackConfig = getDevConfig(envConfig);
  logger.success("WebpackConfig");
  logger.info({
    output: webpackConfig.output,
    devtool: webpackConfig.devtool,
    resolve: webpackConfig.resolve,
    externals: webpackConfig.externals,
    module: webpackConfig.module?.rules,
  });
  const devServer = express();
  const compiler = webpack(webpackConfig);
  setupMiddleWare(devServer, compiler, envConfig);
  const httpServer = devServer.listen(envConfig.PORT, envConfig.HOST, () => {
    console.log();
    logger.success(
      `DevServer Running at http://${envConfig.HOST}:${envConfig.PORT}`
    );
  });

  ["SIGINT", "SIGTERM"].forEach((signal: any) => {
    process.on(signal, () => {
      httpServer.close();
      console.log();
      logger.waning(`${Math.random() > 0.5 ? "See you again" : "Goodbye"}!`);
      process.exit();
    });
  });
}

if (require.main === module) {
  process.env.NODE_ENV = "development";
  (async () => {
    await start();
    afterBuild();
  })();
}
