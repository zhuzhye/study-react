import React, { Component } from "react";
import PropTypes from "prop-types";
class MainBanner extends Component {
  static defaultProps = {
    bananers: [],
    title: "默认标题",
  };
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    const { bananers, title } = this.props;
    return (
      <div className="bananer">
        <h2>封装一个轮播图:{title}</h2>
        {bananers.map((item) => {
          return <li key={item.acm}> {item.title}</li>;
        })}
      </div>
    );
  }
}
MainBanner.propTypes = {
  bananers: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
// MainBanner.defaultProps = {
//   bananers: [],
//   title: "默认标题",
// };
export default MainBanner;
