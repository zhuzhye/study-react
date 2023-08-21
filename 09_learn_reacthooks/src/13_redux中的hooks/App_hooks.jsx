import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter";
const App = memo((props) => {
  // 1.使用useSelector获取redux中的store的数据映射到组件内
  const { counter } = useSelector((state) => ({
    counter: state.counter.counter,
  }));

  //2.使用dispatch直接派发action
  const dispatch = useDispatch();
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumber(num));
    } else {
      dispatch(subNumber(num));
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

export default App;
