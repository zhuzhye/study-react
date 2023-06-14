import React from "react";
class HelloWorld extends React.Component {
  // 1.执行constuctor
  constructor() {
    super();
    this.state = {
      message: "Hello World",
    };
  }
  changeText() {
    this.setState({
      message: "nihao ",
    });
  }
  // 2.执行render函数
  render() {
    const { message } = this.state;
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
  // 3.组件被渲染到DOM:挂载到DOM
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 4.组件被更新
  componentDidUpdate(prevProps, preVState, snpshot) {
    console.log(prevProps, preVState);
    console.log("componentDidUpdate");
    console.log(snpshot);
  }
  // 5.组件被销毁
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  // 不常用的生命周期补充
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate() {
    return {
      userScroll: 1000,
    };
  }
}
export default HelloWorld;
