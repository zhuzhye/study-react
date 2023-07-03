import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "zzy",
    };
  }
  handleSubmitClick(event) {
    // 1.阻止默认行为
    event.preventDefault();
    console.log(this.state.username);
    // 获取到所有表单数据，对数据进行组件
    // 以网络请求的方式，将数据传递给服务端（axios/fetch)
  }
  handleUsernameChange(e) {
    this.setState({ username: "sss" });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <label htmlFor="userName">
            用户：
            <input id="userName" type="text" name="userName" value={username} onChange={(e) => this.handleUsernameChange(e)}></input>
          </label>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
