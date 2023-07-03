import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "zzy",
      password: "123",
      isAgree: true,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false },
      ],
      fruit: "orange",
    };
  }
  handleSubmitClick(event) {
    // 1.阻止默认行为
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.isAgree);
    console.log(
      "获取爱好",
      this.state.hobbies.filter((item) => item.isChecked).map((event) => event.text)
    );
    // 获取到所有表单数据，对数据进行组件
    // 以网络请求的方式，将数据传递给服务端（axios/fetch)
  }
  // handleUsernameChange(e) {
  //   this.setState({ username: e.target.value });
  // }
  // handlePassWordClick(e) {
  //   this.setState({ password: e.target.value });
  // }
  handleInputChange(event) {
    const keyName = event.target.name;
    this.setState({
      [keyName]: event.target.value,
    });
  }
  handleAgreeChange(event) {
    this.setState({ isAgree: event.target.checked });
  }
  hangleCheked(e) {
    let hobbies = [...this.state.hobbies];
    let checked = e.target.checked;
    console.log(e.target.checked);
    hobbies.forEach((item) => {
      if (item.value === e.target.id) {
        item.isChecked = checked;
      }
    });
    this.setState({ hobbies });
  }
  render() {
    const { username, password, isAgree, hobbies } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <div>
            {/* 1.用户名和密码 */}
            <label htmlFor="userName">
              用户：
              <input id="userName" type="text" name="username" value={username} onChange={(e) => this.handleInputChange(e)}></input>
            </label>
            <label htmlFor="password">
              密码：
              <input id="password" type="password" name="password" value={password} onChange={(e) => this.handleInputChange(e)}></input>
            </label>
          </div>
          {/* 2.checkbox */}
          <div>
            <label htmlFor="agree">
              <input type="checkbox" name="agree" id="agree" checked={isAgree} onChange={(e) => this.handleAgreeChange(e)} /> 同意协议
            </label>
          </div>
          {/* 3.checkbox多选 */}
          <div>
            您的爱好：
            {hobbies.map((item) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  <input type="checkbox" id={item.value} checked={item.isChecked} onChange={(e) => this.hangleCheked(e)} />
                  {item.text}
                </label>
              );
            })}
          </div>
          {/* 4.select */}
          <div>
            <select>
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
              <option value="banane">香蕉</option>
            </select>
          </div>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
