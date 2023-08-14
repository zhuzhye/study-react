import React, { PureComponent } from "react";

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h1>Not Found Page</h1>
        <p> 您进入的页面路径不存在</p>
      </div>
    );
  }
}

export default NotFound;
