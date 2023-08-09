import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "../store/features/conter";
export class Profile extends PureComponent {
  componentDidMount() {}
  subNumer(num) {
    const { subNumber } = this.props;
    subNumber(num);
  }
  addNumber(num) {
    const { addNumber } = this.props;
    addNumber(num);
  }
  render() {
    const { counter, banners, recommands } = this.props;
    return (
      <div>
        <h2>Profile Counter:{counter}</h2>
        <button onClick={() => this.subNumer(1)}>-1</button>
        <button onClick={() => this.addNumber(1)}>+1</button>
        <div className="bananer">
          <h2>轮播图展示</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐数据展示</h2>
          <ul>
            {recommands.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommands: state.home.recommands,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumber(num)),
  subNumber: (num) => dispatch(subNumber(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
