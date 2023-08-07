import React, { PureComponent } from "react";
import classNames from "classnames";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: true,
      isccc: false,
    };
  }
  render() {
    const { isbbb, isccc } = this.state;
    const classList = ["aaa"];
    if (isbbb) classList.push("bbb");
    if (isccc) classList.push("ccc");
    const classNameStr = classList.join(" ");
    return (
      <div>
        <h2 className={`aaa ${isbbb ? "bbb" : ""} ${isccc ? "ccc" : ""}`}>哈哈哈</h2>
        <h2 className={classNameStr}>呵呵呵</h2>
        <h2 className={classNames("aaa", { bbb: isbbb, ccc: isccc })}> 黑褐黑</h2>
      </div>
    );
  }
}

export default App;
