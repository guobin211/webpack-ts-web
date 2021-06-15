import { join } from "path";
import fs from "fs";
import { logger } from "../utils/logger";
import { I18nEnum } from "../config/i18n.enum";

/**
 * get-i18n 加载ctx目录下的i18n文件
 */
export function getI18N(ctx: string, lang: I18nEnum) {
  const [root, project] = ctx.split("src/");
  const file = join(root, "src", project, `/i18n/data.${lang}json`);
  let res = {};
  try {
    const txt = fs.readFileSync(file).toString();
    res = JSON.parse(txt);
  } catch (e) {
    logger.error(`getI18N 失败: ${file}`);
    console.error(e);
  }
  return res;
}
