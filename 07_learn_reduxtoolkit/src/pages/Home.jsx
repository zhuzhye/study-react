import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "../store/features/conter";
import { fetchHomeMultidataAction } from "../store/features/home";
export class Home extends PureComponent {
  componentDidMount() {
    const { fetchHomeMultidata } = this.props;
    fetchHomeMultidata();
  }
  subNumer(num) {
    const { subNumber } = this.props;
    subNumber(num);
  }
  addNumber(num) {
    const { addNumber } = this.props;
    addNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2> Home Counter: {counter}</h2>
        <button onClick={() => this.subNumer(1)}>-1</button>
        <button onClick={() => this.addNumber(1)}>+1</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumber(num)),
  subNumber: (num) => dispatch(subNumber(num)),
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction({ name: "zy", age: 18 })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
