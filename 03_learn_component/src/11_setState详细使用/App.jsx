import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }
  changeText() {}
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
