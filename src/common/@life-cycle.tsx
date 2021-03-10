/**
 * @life-cycle window页面加载过程业务
 *  official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/10 15:07
 * @version
 */
export abstract class LifeCycle {

  abstract online: () => void;

}

window.addEventListener('online', function () {

}, false);

window.addEventListener('onload', function () {

}, false);

window.addEventListener('beforeunload', function () {

}, false);
