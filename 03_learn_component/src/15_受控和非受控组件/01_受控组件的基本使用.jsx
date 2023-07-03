import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      userName: "zzy",
    };
  }
  inputChange(event) {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value,
    });
  }
  render() {
    const { userName } = this.state;
    return (
      <div>
        {/* 受控组件 */}
        <input type="text" value={userName} onChange={(e) => this.inputChange(e)} />
        {/* 非受控组件 */}
        <input type="text" value={userName} />
        <h2>{userName}</h2>
      </div>
    );
  }
}

export default App;
