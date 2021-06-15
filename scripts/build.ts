import webpack from "webpack";
import { logger } from "./utils/logger";
import { getProdConfig } from "./webpack/webpack.prod";
import { handleError } from "./utils/handle-error";
import { beforeBuild } from "./before-build";
import { afterBuild } from "./after-build";

async function build() {
  const { envConfig } = beforeBuild([], false);
  logger.success("EnvConfig");
  logger.info(envConfig);
  const config = getProdConfig(envConfig);
  logger.success("WebpackConfig Prod");
  const compiler = webpack(config);
  await compiler.run((a, b) => handleError(a, b, "build success Prod"));
}

if (require.main === module) {
  process.env.NODE_ENV = "production";
  (async () => {
    await build();
    afterBuild();
  })();
}
