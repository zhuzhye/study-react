import React, { PureComponent, createRef } from "react";
class HelloWorld extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  test() {
    console.log("test-----");
  }
  render() {
    return <h1>Hello World</h1>;
  }
}
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
    this.HelloWorldRef = createRef();
  }
  getCommponent() {
    console.log(this.HelloWorldRef.current);
    this.HelloWorldRef.current.test();
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.HelloWorldRef}></HelloWorld>
        <button onClick={(e) => this.getCommponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
