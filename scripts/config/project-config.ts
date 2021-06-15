export interface ProjectConfig {
  type: "web" | "react";
  pathname: string;
  sourcePath: string;
  publicPath: string;
  staticPath: string;
  dependencies: Dependent[];
}

/**
 * 外部依赖
 */
export interface Dependent {
  /**
   * 模块 import React from 'react'
   */
  module: string;
  /**
   * window.React
   */
  external: string;
  /**
   * 从CDN加载依赖
   */
  cdnPath: string;
  /**
   * 从项目内加载
   */
  staticPath: string;
}

/**
 * 多页面项目
 */
export interface ProjectSourceFiles {
  /**
   * 项目内静态资源
   */
  assets: string[];
  /**
   * 项目内组件
   */
  components: string[];
  /**
   * 项目内数据库
   */
  database: string[];
  /**
   * 多语言文件
   */
  i18n: string[];
  /**
   * 工具函数
   */
  services: string[];
  /**
   * 项目内子页面
   */
  pages: ProjectSourceFiles[];
}
