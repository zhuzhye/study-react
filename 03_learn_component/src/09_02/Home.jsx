import React, { Component } from "react";

export class Home extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        Home:{name} age:{age}
      </div>
    );
  }
}

export default Home;
