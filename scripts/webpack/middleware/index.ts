import cors from "cors";
import type { Express } from "express";
import type { Compiler } from "webpack";
import type { DevEnvConfig } from "../../config/constants";
import webpackMiddleware from "./webpack.middle";
import webpackProxy from "./webpack-proxy";

/**
 * index
 *
 * @time 2021/3/23 16:09
 * @version 0.0.1
 */
export function setupMiddleWare(
  server: Express,
  compiler: Compiler,
  env: DevEnvConfig
): void {
  server.use(cors());
  // webpack 相关中间件
  server.use(webpackMiddleware(compiler, env));
  webpackProxy(server);
}
