import React, { Component } from "react";
import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0,
    };
  }
  tabClick(index) {
    this.setState({ tabIndex: index });
  }
  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div>
        <TabControl titles={titles} tabClick={(index) => this.tabClick(index)}></TabControl>
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}

export default App;
