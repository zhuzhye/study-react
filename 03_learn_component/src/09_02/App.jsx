import React, { Component } from "react";
import HomeInfo from "./HomeInfo";
import ThemeContext from "./context/theme-context";
import HomeBananer from "./HomeBananer";
import UserContext from "./context/User-context";
import Profile from "./Profile";
// 1.创建一个context

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: { name: "zzy", age: 18 },
    };
  }
  render() {
    return (
      <div>
        <h2>Appp</h2>
        <UserContext.Provider value={{ nickName: "kone" }}>
          <ThemeContext.Provider value={{ color: "red", age: 19 }}>
            <HomeInfo></HomeInfo>
            <HomeBananer></HomeBananer>
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
