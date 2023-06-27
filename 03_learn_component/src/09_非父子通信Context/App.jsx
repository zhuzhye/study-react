import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import HomeInfo from './HomeInfo'
// 1创建一个context
export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: { name: 'kobe', age: 30 }
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <h2>App</h2>
        {/* 1.给Home传递是数据 */}
        {/* <Home name="wshy" age={18}></Home>
        <Home {...info}></Home> */}
        {/* 2.给普通的Home传递 */}
        <ThemeContext.Provider value={{ color: 'red', size: '30' }} >
          <Home {...info}></Home>
          <HomeInfo></HomeInfo>
        </ThemeContext.Provider>
      </div >
    )
  }
}

export default App