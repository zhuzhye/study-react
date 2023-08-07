import React, { PureComponent } from "react";
import { AppWrapper, SectionWrapper } from "./style";
import Home from "./home";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      size: 30,
      color: "green",
    };
  }
  render() {
    const { size, color } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h2 className="title">我是标题 </h2>
          <h2 className="content">我是内容 </h2>
          <button onClick={(e) => this.setState({ color: "orange" })}> 修改颜色</button>
        </SectionWrapper>
        <Home></Home>
        <div className="footer">
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
