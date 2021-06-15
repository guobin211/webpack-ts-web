declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.html";
declare module "*.ejs";
declare module "*.hbs";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.bmp" {
  const ref: string;
  export default ref;
}
declare module "*.gif" {
  const ref: string;
  export default ref;
}
declare module "*.jpg" {
  const ref: string;
  export default ref;
}
declare module "*.jpeg" {
  const ref: string;
  export default ref;
}
declare module "*.png" {
  const ref: string;
  export default ref;
}
declare module "*.webp" {
  const ref: string;
  export default ref;
}
declare module "*.json5" {
  const ref: string;
  export default ref;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

// webpack.DefinePlugin({IS_DEV:true})
declare const IS_DEV: boolean;
declare const IS_I18N: boolean;
declare const IS_RELEASE: boolean;
declare const PUBLIC_PATH: string;
declare const I18N_KEY: string;
