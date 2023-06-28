import React, { Component } from "react";
import HomeBananer from "./HomeBananer";
import Home from "./Home";
import eventBus from "./untils/events-bus";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      height: 1,
    };
  }
  componentDidMount() {
    eventBus.on("bannerPrev", this.bananerPreClick.bind(this));
  }
  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bananerPreClick.bind(this));
  }
  bananerPreClick(name, age, height) {
    this.setState({
      name,
      age,
      height,
    });
  }
  render() {
    const { name, age, height } = this.state;
    return (
      <div>
        <h1>
          App {name} +{age}+{height}
        </h1>
        <Home></Home>
        <HomeBananer></HomeBananer>
      </div>
    );
  }
}

export default App;
