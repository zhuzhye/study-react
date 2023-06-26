import React, { Component } from "react";

export class AddCounter extends Component {
  addCount(count) {
    let click = this.props.addClick;
    click(count);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.addCount(1)}>+1</button>
        <button onClick={(e) => this.addCount(10)}>+10</button>
        <button onClick={(e) => this.addCount(100)}> +100</button>
      </div>
    );
  }
}

export default AddCounter;
