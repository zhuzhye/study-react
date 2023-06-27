import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'
export class App extends Component {
  render() {
    const btn = <button>按钮2</button>
    return (
      <div>
        {/* 1.使用children实现插槽 */}
        <NavBar>
          <button> 按钮</button>
          <h2>我是标题</h2>
          <i>斜体的文字</i>
        </NavBar>
        {/* 2.使用props实现插槽 */}
        <NavBar2 leftSlot={btn} centerSlot={<h2>哈哈哈</h2>} rightSlot={<i>xxxx</i>}></NavBar2>
      </div>
    )
  }
}

export default App