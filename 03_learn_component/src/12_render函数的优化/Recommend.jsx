import React, { PureComponent } from "react";

export class Recommend extends PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     if (this.props.counter !== nextProps.counter) {
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    console.log("Recommend Render");
    return <div>Recommend Page:{this.props.counter}</div>;
  }
}

export default Recommend;
