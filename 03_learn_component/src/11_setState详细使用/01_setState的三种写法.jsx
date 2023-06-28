import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }
  changeText() {
    // 1.setState的更多用法
    // 1.基本使用
    // this.setState({
    //     message:'aaa'
    // })

    // 2.setState可以传入回调函数
    // 好处一：可以在回调函数中编写信息的state逻辑
    // 好处二:当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // 1.编写一些新的state处理逻辑
    //   // 2.可以获取之前的state和props的值
    //   console.log(state, props, "state, props");
    //   return {
    //     message: "222",
    //   };
    // });

    //3.setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后(数据合并),获取到对应的结果执行一些逻辑
    // 那么可以在setState中传入第二个参数:callback
    this.setState(
      {
        message: "你好啊,zzy",
      },
      () => {
        console.log(this.state.message, "eee");
      }
    );
    console.log(this.state.message, "first");
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
