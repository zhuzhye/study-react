import React, { PureComponent } from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "../src/style.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommand from "./pages/HomeRecommand";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";
export class App extends PureComponent {
  navigetTo() {}
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>
            Header
            <div className="nav">
              {/* <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
                首页
              </NavLink>
              <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
                关于
              </NavLink> */}
              <NavLink to="/home" className={({ isActive }) => (isActive ? "link-active" : "")}>
                首页
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "")}>
                关于
              </NavLink>
              <button onClick={(e) => this.navigetTo()}>分类</button>
              <button onClick={(e) => this.navigetTo()}>订单</button>
              <Link to="/login">登录</Link>
            </div>
          </span>
        </div>
        <div className="content">
          {/* 映射关系：patch => component  */}
          <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Home></Home>}>
              <Route path="/home" element={<Navigate to="/home/recommand"></Navigate>}></Route>
              <Route path="/home/recommand" element={<HomeRecommand></HomeRecommand>}></Route>
              <Route path="/home/ranking" element={<HomeRanking></HomeRanking>}></Route>
            </Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/categoty" element={<Category></Category>}></Route>
            <Route path="/order" element={<Order></Order>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
