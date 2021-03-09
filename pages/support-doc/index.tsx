/**
 * index
 * official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/8 14:44
 * @version
 */
import React from 'react';
import './index.scss';

function Button(txt: string) {
  const b = document.createElement('button');
  b.innerText = txt;
  return b;
}

document.body.appendChild(Button('hello'))
