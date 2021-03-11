/**
 * page.config
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:17
 * @version
 */
export interface Page {
  /**
   * 编译入口
   */
  sourceList: WebpackSource[];
  /**
   * 页面标题, co-work平台配置
   */
  title: string;
  description: string;
  keywords: string;
}

export interface WebpackSource {
  sourceType: 'html' | 'ejs' | 'ts' | 'js' | 'tsx' | 'jsx' | 'scss' | 'sass' | 'css' | 'less',
  path: string;
}
