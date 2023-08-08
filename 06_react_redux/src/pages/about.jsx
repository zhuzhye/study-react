import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, sunNumberAction } from "../store/counter";
export class about extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num);
    } else {
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter, bananers, recommand } = this.props;
    return (
      <div>
        <h2>about page:{counter}</h2>
        <button onClick={(e) => this.calcNumber(6, true)}>+6</button>
        <button onClick={(e) => this.calcNumber(6, false)}>-6</button>
        <button onClick={(e) => this.calcNumber(88, true)}>+88</button>
        <button onClick={(e) => this.calcNumber(88, false)}>-88</button>
        <div className="bananers">
          <h2>轮播图数据：</h2>
          <ul>
            {bananers.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommand">
          <h2>推荐数据：</h2>
          <ul>
            {recommand.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
// connect 返回值是一个高阶函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }
// const fn2 = (dispatch) => {
//   return {
//     addNumber(num) {
//       dispatch(addNumberAction(num));
//     },
//     subNumber(num) {
//       dispatch(sunNumberAction(num));
//     },
//   };
// };
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  bananers: state.home.banner,
  recommand: state.home.recommand,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(sunNumberAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(about);
