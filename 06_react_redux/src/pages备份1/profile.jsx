import React, { PureComponent } from "react";
import store from "../store";
import { sunNumberAction } from "../store/actionCreators";
export class profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  subNumber(num) {
    store.dispatch(sunNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Profile counter:{counter}</h2>
        <button onClick={(e) => this.subNumber(1)}>-1</button>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
        <button onClick={(e) => this.subNumber(8)}>-8</button>
      </div>
    );
  }
}

export default profile;
