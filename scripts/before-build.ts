import { getEntryMap } from "./webpack/get-entry-map";
import { BuildConfig, DevEnvConfig } from "./config/constants";
import { getWebpackInject } from "./webpack/get-webpack-inject";

export function beforeBuild(ignorePages: string[], isDev: boolean) {
  const entryMap = getEntryMap(ignorePages, isDev);
  let envConfig;
  let webpackInject;
  if (isDev) {
    envConfig = new DevEnvConfig(entryMap);
    webpackInject = getWebpackInject(envConfig, isDev);
  } else {
    envConfig = new BuildConfig(entryMap);
    webpackInject = getWebpackInject(envConfig, isDev);
  }

  return {
    entryMap,
    envConfig,
    webpackInject,
  };
}
