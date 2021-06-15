import React from "react";
import ReactDom from "react-dom";
import HomePage from "./modules/home/home.page";
import { beforeLoad } from "./services/before-load";
import { afterLoad } from "./services/after-load";
declare const module: any;

beforeLoad();
ReactDom.render(<HomePage />, document.getElementById("app"), afterLoad);

if (module.hot) {
  module.hot.accept();
}
