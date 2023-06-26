import React, { Component } from "react";

export class MainProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { productList } = this.props;
    return (
      <div>
        <h2>商品列表</h2>
        {productList.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </div>
    );
  }
}

export default MainProductList;
