import React, { Component } from "react";
import Home from "./Home";
import ThemeContext from "./context/theme-context";
import HomeInfo from "./HomeInfo";
import HomeBananer from "./HomeBanner";
import { UserContext, aa } from "./context/user-context";
// 1创建一个context
export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: { name: "kobe", age: 30 },
    };
  }
  render() {
    const { info } = this.state;
    aa.bb = 1;
    return (
      <div>
        <h2>App</h2>
        {/* 1.给Home传递是数据 */}
        {/* <Home name="wshy" age={18}></Home>
        <Home {...info}></Home> */}
        {/* 2.给普通的Home传递 */}
        <UserContext.Provider value={{ nickname: "kobe" }}>
          <ThemeContext.Provider value={{ color: "red", size: "30" }}>
            <Home {...info}></Home>
            <HomeInfo></HomeInfo>
            <HomeBananer></HomeBananer>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
