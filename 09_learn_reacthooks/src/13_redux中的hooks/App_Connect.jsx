import React, { memo } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter";
const App = memo((props) => {
  const { counter, addNumber, subNumber } = props;
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      addNumber(num);
    } else {
      subNumber(num);
    }
  }
  return (
    <div>
      {counter}
      <button onClick={(e) => addNumberHandle(1)}>+1</button>
      <button onClick={(e) => addNumberHandle(7, false)}>-7</button>
      <button onClick={(e) => addNumberHandle(6)}>+6</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  subNumber(num) {
    dispatch(subNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
