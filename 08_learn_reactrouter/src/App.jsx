import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>
            Header
            <div className="nav">
              <Link to="/home">首页</Link>
              <Link to="/about">关于</Link>
            </div>
          </span>
        </div>
        <div className="content">
          {/* 映射关系：patch => component  */}
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
