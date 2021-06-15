import chalk from "chalk";
import util from "util";

const COLOR_MAP = {
  error: chalk.rgb(245, 34, 45),
  waning: chalk.rgb(212, 56, 13),
  info: chalk.rgb(35, 120, 4),
  c: "#003a8c",
  success: chalk.rgb(0, 58, 140),
};

function getTag(s: string) {
  if (s && s.length <= 66) {
    const step = Math.ceil((66 - s.length) / 2);
    return `${"=".repeat(step)}>>  ${s}  <<${"=".repeat(step)}`;
  }
  return s;
}

/**
 * logger
 *
 * @time 2021/3/23 16:47
 * @version 0.0.1
 */
function log(value: any): void {
  if (value && typeof value === "object") {
    console.log(util.inspect(value, { showHidden: false, depth: 2 }));
  } else {
    console.log(getTag(value));
  }
}

function info(value: any): void {
  if (value && typeof value === "object") {
    console.log(
      COLOR_MAP.info(util.inspect(value, { showHidden: false, depth: 2 }))
    );
  } else {
    console.log(COLOR_MAP.info(getTag(value)));
  }
}

function success(value: any): void {
  if (value && typeof value === "object") {
    console.log(
      COLOR_MAP.success(util.inspect(value, { showHidden: false, depth: 2 }))
    );
  } else {
    console.log(COLOR_MAP.success(getTag(value)));
  }
}

function waning(value: any): void {
  if (value && typeof value === "object") {
    console.log(
      COLOR_MAP.waning(util.inspect(value, { showHidden: false, depth: 2 }))
    );
  } else {
    console.log(COLOR_MAP.waning(getTag(value)));
  }
}

function error(value: any): void {
  if (value && typeof value === "object") {
    console.log(
      chalk.red(util.inspect(value, { showHidden: false, depth: 2 }))
    );
  } else {
    console.log(chalk.red(getTag(value)));
  }
}

export const logger = {
  log,
  waning,
  info,
  error,
  success,
};
