import React, { PureComponent } from "react";
import enhancedUserInfo from "./hoc/enhanced_props";
import About from "./pages/about";
// 定义组件：给一些需要特殊数据的组件注入props

const Home = enhancedUserInfo(function (props) {
  return (
    <h1>
      home:{props.name}-{props.age}-{props.bananers}
    </h1>
  );
});
const Propfile = enhancedUserInfo(function (props) {
  return (
    <h1>
      Profile:{props.name}-{props.age}
    </h1>
  );
});
const HelloFriend = enhancedUserInfo(function (props) {
  return (
    <h1>
      HelloFriend:{props.name}-{props.age}
    </h1>
  );
});
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home bananers={["轮播1", "轮播2"]}></Home>
        <Propfile></Propfile>
        <HelloFriend></HelloFriend>
        <About></About>
      </div>
    );
  }
}

export default App;
