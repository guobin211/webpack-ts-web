import { DevEnvConfig, isProductionNode, ROOT_DIR } from "../config/constants";
import { resolve } from "path";

export function getOutputConfig(env: DevEnvConfig) {
  return {
    publicPath: env.PUBLIC_PATH,
    path: resolve(ROOT_DIR, "dist"),
    clean: true,
    pathinfo: false,
    assetModuleFilename: (pathInfo) => {
      if (pathInfo.filename && !pathInfo.filename.includes("static")) {
        const fileName = pathInfo.filename?.replace("src/", "static/");
        if (fileName) {
          const dotIndex = fileName?.lastIndexOf(".");
          const b = fileName.slice(0, dotIndex);
          const a = fileName.slice(dotIndex, fileName.length);
          if (isProductionNode()) {
            return `${b}-${pathInfo.contentHash}${a}`;
          }
          return `${b}${a}`;
        }
      }
      return "";
    },
  };
}
