import React, { PureComponent } from "react";
import logRenderTime from "../hoc/log_render_time";

export class Deatil extends PureComponent {
  render() {
    return (
      <div>
        <h1>Detal page</h1>
        <ul>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
          <li>{"数据列表"}</li>
        </ul>
      </div>
    );
  }
}

export default logRenderTime(Deatil);
