/**
 * logger.test
 */

import { logger } from "./logger";

function test(value: any) {
  logger.log(value);
  logger.info(value);
  logger.success(value);
  logger.waning(value);
  logger.error(value);
}

export function testLogger() {
  [
    null,
    undefined,
    0,
  ].forEach(test);
}
