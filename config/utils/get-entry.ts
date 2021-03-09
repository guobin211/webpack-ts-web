import fs from 'fs';
import path from 'path';
import { __DEV__, PROJECT_ROOT } from '../@node-constants';
import { EntryObject } from 'webpack';

/**
 * get-entry
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:53
 * @version
 */
export function getEntry(): EntryObject {
  const pages = path.resolve(PROJECT_ROOT, 'pages');
  const dirs = fs.readdirSync(pages);
  const res: EntryObject = {};
  for (const dir of dirs) {
    const cPath = path.resolve(pages, dir);
    const stat = fs.statSync(cPath);
    if (stat.isDirectory()) {
      const files = fs.readdirSync(cPath);
      const index = files.find(el => el ==='index.tsx');
      if (index) {
        res[`js/${dir}`] = [__DEV__ ? 'react-hot-loader/patch' : '', `${cPath}`];
      }
    }
  }
  return res
}
