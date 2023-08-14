import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { withRouter } from "../hoc";

export class Home extends PureComponent {
  navigateTo(path) {
    console.log(path);
    const { navigate } = this.props.router;
    navigate(path);
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="home-nav">
          <Link to="/home/recommand">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
          <button onClick={(e) => this.navigateTo("/home/songMenu")}>歌单</button>
        </div>
        <div>
          {/* 占位组件 */}
          <Outlet></Outlet>
        </div>
      </div>
    );
  }
}

// 高阶组件：函数

export default withRouter(Home);
