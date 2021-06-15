import path from "path";
import fs from "fs";
import { HMR_PATH, ROOT_DIR } from "../config/constants";
import { EntryObject } from "webpack";

/**
 * @param ignorePages {} 打包时忽略的目录
 * @param isDev 开发环境
 */
export function getEntryMap(
  ignorePages: string[] = [],
  isDev = true
): EntryObject {
  const pages = path.resolve(ROOT_DIR, "src/react-pages");
  const dirs = fs.readdirSync(pages);
  const res: EntryObject = {};
  for (const dir of dirs) {
    const cPath = path.resolve(pages, dir);
    const stat = fs.statSync(cPath);
    if (
      stat.isDirectory() &&
      !dir.startsWith("__") &&
      !ignorePages.includes(dir)
    ) {
      const files = fs.readdirSync(cPath);
      const tsx = files.find((el) => el === "index.tsx");
      const ts = files.find((el) => el === "index.ts");
      if (tsx && ts) {
        throw new Error(
          `${cPath}: 入口文件重复，请删除' index.ts '或者' index.tsx '`
        );
      }
      if (!tsx && !ts) {
        throw new Error(
          `${cPath}: 缺少入口文件，请添加' index.ts（native）' 或者 ' index.tsx（react）'`
        );
      }
      const sources: string[] = [];
      if (isDev) {
        sources.push(`webpack-hot-middleware/client?path=${HMR_PATH}/${dir}`);
        if (tsx) {
          sources.push("react-hot-loader/patch");
          sources.push(`${cPath}/index.tsx`);
        } else {
          sources.push(`${cPath}/index.ts`);
        }
      } else {
        if (tsx) {
          sources.push(`${cPath}/index.tsx`);
        } else {
          sources.push(`${cPath}/index.ts`);
        }
      }
      res[`${dir}/index`] = sources;
    }
  }
  return res;
}
