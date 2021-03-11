/**
 * polyfill
 * official-website-pc
 *
 <script>
  const modernBrowser = window.fetch && 'assign' in Object;
  if (!modernBrowser) {
    const scriptElement = document.createElement('script');
    scriptElement.async = false;
    scriptElement.src = '/polyfill.bundle.js';
    document.head.appendChild(scriptElement);
  }
 </script>
 * @author michaelbguo@tencent.com
 * @time 2021/3/9 12:53
 * @version
 */
