import React, { PureComponent } from "react";

// 定义一个高阶组件
function hoc(Cpn) {
  // return Cpn
  // 1.定义一个类组件
  class NewCpn extends PureComponent {}
  return NewCpn;
}
export class App extends PureComponent {
  render() {
    return <div>App</div>;
  }
}

export default App;
