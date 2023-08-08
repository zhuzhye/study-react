import React, { PureComponent } from "react";
import store from "../store";
import { addNumberAction } from "../store/counter";
export class home extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter.counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter.counter });
    });
  }
  addNumber(num) {
    store.dispatch(addNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Home Counter:{counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
        <button onClick={(e) => this.addNumber(8)}>+8</button>
      </div>
    );
  }
}

export default home;
