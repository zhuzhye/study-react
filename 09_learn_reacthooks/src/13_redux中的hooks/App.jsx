import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addNumber, subNumber, changeMessage } from "./store/modules/counter";
// memo高阶组件包裹起来的组件对应的特点，只有props发生改变时，才会被渲染
const Home = memo((props) => {
  const { message } = useSelector(
    (state) => ({
      message: state.counter.message,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function changeMessageHandle() {
    dispatch(changeMessage("hello ss"));
  }
  console.log("home Render");
  return (
    <div>
      <h2>Home:{message}</h2>
      <button onClick={(e) => changeMessageHandle()}> 修改message</button>
    </div>
  );
});
const App = memo((props) => {
  // 1.使用useSelector获取redux中的store的数据映射到组件内
  const { counter } = useSelector(
    (state) => ({
      counter: state.counter.counter,
    }),
    shallowEqual
  );
  console.log("App render");
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
      <Home></Home>
    </div>
  );
});

export default App;
