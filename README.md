# webpack 多页面

```bash

 yarn install

 yarn bootstrap

```

## 多页面框架

```bash

	packages							// 公共依赖

	scripts								// 构建脚本

	src
		__common__ 			// 公共脚本
		__styles__           // 公共样式
		__template__		  // 公共模版

		react-pages		     // 多页面
			page-name
				components
				i18n
				modules						// 子模块
				services
				index.ts
				index.html
				index.scss

	static							// 静态资源库
		css
		img
		lib							// umd库
		favicon.ico

	server							// 服务端CMS

	types

```
