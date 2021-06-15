import ejs from "ejs";
import { getI18N } from "./get-i18n";
import { I18nEnum } from "../config/i18n.enum";
import { getWebpackInject } from "./get-webpack-inject";

/**
 * get-ejs-render 处理ctx目录下的html文件
 */
export async function getEJSRender(
  content: string,
  loaderContext: { resourcePath: string; context: string }
) {
  const data = await getI18N(loaderContext.context, I18nEnum.DEFAULT);
  const inject = getWebpackInject({});
  const res = await ejs.renderFile(
    loaderContext.resourcePath,
    Object.assign(data, inject),
    {}
  );
  if (res) {
    return res;
  }
  return content;
}
