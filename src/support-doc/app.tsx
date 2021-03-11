/**
 * app
 *  official-website-pc
 * @author michaelbguo@tencent.com
 * @time 2021/3/10 15:04
 * @version
 */
import React, { Component } from 'react';
import logo from './assets/header_logo_2x.png';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <img src={logo} alt=""/>
      </div>
    );
  }
}

export default App;
