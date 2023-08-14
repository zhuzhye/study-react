import React, { PureComponent } from "react";

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
  }
  changeText() {
    this.setState({
      message: "你好世界",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>内容1：{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2(props) {
  let message = "Hello World";
  // 函数式组件存在得最大的缺陷
  // 1.修改message之后，组件知道自己重新渲染吗？不知道 组件不会被重新渲染
  // 2.如果页面重新渲染：函数会被重新执行，第二次重新执行，会重新给message赋值为hello world
  // 3.没有类似于生命周期回调
  return (
    <div>
      <h2>内容2：{message}</h2>
      <button onClick={(e) => (message = "你好啊")}>修改文本</button>
    </div>
  );
}

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello World",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>内容：{message}</h2>
        <div>
          <HelloWorld></HelloWorld>
          <HelloWorld2></HelloWorld2>
        </div>
      </div>
    );
  }
}
export default App;
