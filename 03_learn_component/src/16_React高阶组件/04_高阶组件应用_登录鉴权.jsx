import React, { PureComponent } from "react";
import Cart from "./pages/Cart";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  loginClick() {
    localStorage.setItem("token", "sss");
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.loginClick()}>登录</button>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
