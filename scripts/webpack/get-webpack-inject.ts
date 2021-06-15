import { I18nEnum } from "../config/i18n.enum";

let WebpackInject;

export function getWebpackInject(env: any, isDev = true) {
  if (!WebpackInject) {
    WebpackInject = {
      IS_DEV: isDev,
      IS_I18N: env.I18N !== I18nEnum.DEFAULT,
      I18N_KEY: env.I18N,
      PUBLIC_PATH: env.PUBLIC_PATH,
      IS_RELEASE: !isDev,
    };
  }
  return WebpackInject;
}
