import { Component } from "react";
import Header from "./c-cpns/Header";
import Footer from "./c-cpns/Footer";
import Main from "./c-cpns/Main";
import "./style.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
