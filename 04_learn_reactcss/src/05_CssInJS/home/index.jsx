import React, { PureComponent } from "react";
import { HomeWrapper, HYButtonWrapper } from "./style";
export class home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="top">
          <div className="banner">bananer</div>
        </div>
        <div className="bottom">
          <h2 className="header">
            <span>热门推荐</span>
          </h2>
          <ul className="product-list">
            <li className="item">商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
          </ul>
        </div>
        <HYButtonWrapper>hhhh</HYButtonWrapper>
      </HomeWrapper>
    );
  }
}

export default home;
