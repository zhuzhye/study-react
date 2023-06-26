import React, { Component } from "react";

export class SubCounter extends Component {
  subCounter(counter) {
    this.props.addClick(counter);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.subCounter(-1)}>-1</button>
        <button onClick={() => this.subCounter(-5)}>-5</button>
        <button onClick={() => this.subCounter(-10)}>-10</button>
      </div>
    );
  }
}

export default SubCounter;
