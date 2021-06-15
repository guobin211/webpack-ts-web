import webpack from "webpack";
import { logger } from "./utils/logger";
import { handleError } from "./utils/handle-error";
import { getWebpackTestConfig } from "./webpack/webpack.test";
import { beforeBuild } from "./before-build";
import { afterBuild } from "./after-build";

export default async function build() {
  const { envConfig } = beforeBuild([], false);
  logger.success("EnvConfig");
  logger.info(envConfig);
  const testConfig = getWebpackTestConfig(envConfig);
  logger.success("WebpackConfig TestConfig");
  const compilerES = webpack(testConfig);
  await compilerES.run((a, b) => handleError(a, b, "build success test"));
}

if (require.main === module) {
  process.env.NODE_ENV = "production";
  (async () => {
    await build();
    afterBuild();
  })();
}
