/**
 * build
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 15:15
 * @version
 */
import webpack from 'webpack';
import { prodConfig } from '../config/webpack';

const compiler = webpack(prodConfig);

compiler.run((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`build success: ${result?.toString()}`);
})
