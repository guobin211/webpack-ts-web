import { logger } from "./logger";

export const handleError = (error, stats: any, info: string) => {
  if (error) {
    console.error(error);
    return;
  }

  if (stats?.hasErrors()) {
    logger.error("webpack build with error: ");
    if (stats.compilation) {
      console.error(stats.compilation.errors);
    } else {
      console.error(stats);
    }
    return;
  }

  if (stats?.hasWarnings()) {
    logger.error("webpack build with warning: ");
    if (stats.compilation) {
      console.error(stats.compilation.warnings);
    } else {
      console.error(stats);
    }
    return;
  }
  logger.success(info);
};
