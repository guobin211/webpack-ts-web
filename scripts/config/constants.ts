import path from "path";
import { I18nEnum } from "./i18n.enum";

// node_modules同级别目录
export const ROOT_DIR = path.resolve(__dirname, "..", "..");
export const HMR_PATH = "/__webpack_hmr";
export const NODE_ARGS = ["test", "english"];

export function isProductionNode() {
  return process.env.NODE_ENV === "production";
}

/**
 * ENV 配置
 *
 * @time 2021/3/19 17:36
 * @version 0.0.1
 */
export class DevEnvConfig {
  CDN_PATH = "";
  HOST = "127.0.0.1";
  PORT = 3000;
  PUBLIC_PATH = "/";
  I18N: I18nEnum = I18nEnum.DEFAULT;
  ENTRY_MAP: Record<string, any>;
  constructor(ENTRY_MAP: Record<string, any>) {
    this.ENTRY_MAP = ENTRY_MAP;
  }
}

export class BuildConfig extends DevEnvConfig {
  PUBLIC_PATH = "/";
  CDN_PATH = "";
}

export class BuildENConfig extends DevEnvConfig {
  PUBLIC_PATH = "/";
  CDN_PATH = "";
  I18N = I18nEnum.ENGLISH;
}
