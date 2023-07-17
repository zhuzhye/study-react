import React, { Component } from "react";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/User-context";

export class HomeInfo extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        HomeInfo:{this.context.color}
        <UserContext.Consumer>
          {(value) => {
            return <h2> Info User ：{value.nickName}</h2>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

HomeInfo.contextType = ThemeContext;
export default HomeInfo;
