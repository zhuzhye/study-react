import React, { Component } from "react";
import { flushSync } from "react-dom";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }
  changeText() {
    setTimeout(() => {
      // 在react18之前，setTimeout中setState操作时同步的
      // 在react18之后，setTimeout中setState操作时异步的
      // 批处理
      flushSync(() => {
        this.setState({
          message: "你好啊",
        });
      });
      console.log(this.state.message);
    }, 0);
  }
  increment() {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }
  render() {
    const { message, counter } = this.state;
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={(e) => this.increment()}> counter+1</button>
      </div>
    );
  }
}

export default App;
