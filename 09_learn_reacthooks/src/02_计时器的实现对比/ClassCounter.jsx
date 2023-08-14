import React, { PureComponent } from "react";

export class ClassCounter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  increatement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decreatement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数；{counter}</h2>
        <button onClick={(e) => this.increatement()}>+1</button>
        <button onClick={(e) => this.decreatement()}>-1</button>
      </div>
    );
  }
}

export default ClassCounter;
