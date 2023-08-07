import React, { PureComponent } from "react";
import appStyle from "./App.module.css";
import Home from "./home/Home";
import Profile from "./Profile/Profile";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是标题</h2>
        <p className="content">我是内容哈哈哈</p>
        <Home />
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
