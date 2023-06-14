const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    // 1.state结构，获取message
    const { message } = this.state;
    return (
      <div>
        {/*jsx注释写法*/}
        {/* <h2>{message}</h2> */}
      </div>
    );
  }
}
root.render(<App />);