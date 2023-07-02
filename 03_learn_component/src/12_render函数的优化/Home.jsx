import React, { PureComponent } from "react";

export class Home extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.props.message !== nextProps.message) {
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    console.log("Home Render");
    return <div>Home Page:{this.props.message}</div>;
  }
}

export default Home;
