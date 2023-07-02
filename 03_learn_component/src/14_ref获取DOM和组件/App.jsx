import React, { PureComponent, createRef, forwardRef } from "react";
const HelloWorld = forwardRef(function (props, ref) {
  return <h1 ref={ref}> hello World</h1>;
});
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
    this.HelloWorldRef = createRef();
  }
  getCommponent() {
    console.log(this.HelloWorldRef.current);
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
