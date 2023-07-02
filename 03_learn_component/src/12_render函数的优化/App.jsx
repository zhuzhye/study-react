import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }
  chnageText() {
    this.setState({ message: "Hello World1" });
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  //   shouldComponentUpdate(nextProps, newState) {
  //     // 性能优化
  //     // if (this.state.message !== newState.message) {
  //     return true;
  //     // }
  //     // return false;
  //   }
  render() {
    const { message, counter } = this.state;
    console.log("App Render");
    return (
      <div>
        <h2>
          App-{message}-{counter}
        </h2>
        <button onClick={() => this.chnageText()}>修改文本</button>
        <button onClick={() => this.increment()}> counter+1</button>
        <Home message={message} />
        <Recommend counter={counter}></Recommend>
        <Profile message={message}></Profile>
      </div>
    );
  }
}

export default App;
