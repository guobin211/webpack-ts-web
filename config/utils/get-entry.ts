import fs from 'fs';
import path from 'path';
import { __DEV__, PROJECT_ROOT } from '../@node-constants';
import { EntryObject } from 'webpack';
import { resolve } from '../@node-help';

const ignorePages = ['common'];

/**
 * get-entry
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:53
 * @version
 */
export function getEntry(): EntryObject {
  const pages = path.resolve(PROJECT_ROOT, 'src');
  const dirs = fs.readdirSync(pages);
  const res: EntryObject = {
    polyfill: resolve(PROJECT_ROOT, 'src', 'polyfill.ts')
  };
  for (const dir of dirs) {
    const cPath = path.resolve(pages, dir);
    const stat = fs.statSync(cPath);
    if (stat.isDirectory() && !ignorePages.includes(dir)) {
      const files = fs.readdirSync(cPath);
      const tsx = files.find(el => el ==='index.tsx');
      const ts = files.find(el => el ==='index.ts');
      if (tsx && ts) {
        throw new Error(`${cPath}: 入口文件重复，请删除'index.ts'或者'index.tsx'`);
      }
      if (!tsx && !ts) {
        throw new Error(`${cPath}: 缺少入口文件，请添加'index.ts（native）'或者'index.tsx（react）'`);
      }
      const sources = [];
      if (tsx && __DEV__) {
        sources.push('react-hot-loader/patch');
      }
      sources.push(`${cPath}`)
      res[`pages/${dir}`] = sources;
    }
  }
  return res
}
