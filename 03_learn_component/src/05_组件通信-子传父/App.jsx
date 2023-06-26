import React, { Component } from "react";
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }
  changeCounter(count) {
    this.setState({ counter: this.state.counter + count });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <AddCounter addClick={(count) => this.changeCounter(count)}></AddCounter>
        <SubCounter addClick={(count) => this.changeCounter(count)}></SubCounter>
      </div>
    );
  }
}
export default App;
