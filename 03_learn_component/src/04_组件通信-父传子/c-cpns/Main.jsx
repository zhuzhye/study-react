import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";
import axios from "axios";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      bananers: [],
      productList: [],
    };
  }
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      console.log(res);
      const bananers = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setState({
        bananers,
        productList: recommend,
      });
    });
  }
  render() {
    const { bananers, productList } = this.state;
    return (
      <div>
        <div>main</div>
        <MainBanner bananers={bananers} title="轮播图"></MainBanner>
        <MainBanner></MainBanner>
        <MainProductList productList={productList}></MainProductList>
      </div>
    );
  }
}

export default Main;
