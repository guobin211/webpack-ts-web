/**
 * dev
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/9 09:49
 * @version
 */
import webpack from 'webpack';
import { devConfig } from '../config/webpack';

const compiler = webpack(devConfig);

compiler.run((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`dev success: ${result?.endTime}`);
})
