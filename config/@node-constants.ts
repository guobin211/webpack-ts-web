import { argv } from 'yargs';
import path from 'path';

/**
 * constants
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:42
 * @version
 */
const __DEV__  = process.env.NODE_ENV !== 'production';
const ENABLE_ANALYZE = !!argv.analyze;
const ENABLE_OPEN = argv.open as true | string;

const HOST = '127.0.0.1';
const DEFAULT_PORT = 8090;
const PROJECT_ROOT = path.resolve(__dirname, '..',);

export {
  __DEV__,
  ENABLE_ANALYZE,
  ENABLE_OPEN,
  HOST,
  DEFAULT_PORT,
  PROJECT_ROOT
}
