import React, { Component } from "react";
import eventBus from "./untils/events-bus";
export class HomeBananer extends Component {
  preButton() {
    console.log("上一个");
    eventBus.emit("bannerPrev", "zzy", 18, 1.14);
  }
  nextButton() {
    console.log("下一个");
  }
  render() {
    return (
      <div>
        <h2>homeBananer</h2>
        <button onClick={(e) => this.preButton()}>上一个</button>
        <button onClick={(e) => this.nextButton()}>上一个</button>
      </div>
    );
  }
}

export default HomeBananer;
