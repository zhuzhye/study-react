import React, { memo, useCallback, useState, useRef } from "react";
// useCallBack性能优化的点：
// 1.当我们需要将一个函数传递给子组件时，最好使用useCallBack进行优化，加那个优化之后的函数，传递给子组件

const HYIncrement = memo(function (props) {
  const { increment } = props;
  console.log("被渲染");
  return <button onClick={increment}>increment_+1</button>;
});

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello");
  //   const increment = useCallback(() => {
  //     setCount(count + 1);
  //   }, [count]);
  // 进一步的优化：当count方法变化时，也是用同一个函数
  // 做法一：将count依赖项一处，缺点：闭包陷阱
  // 做法二：useRef，在组件多次渲染时返回同一个值
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={increment}>+1</button>
      <h2>{message}</h2>
      <button onClick={(e) => setMessage("你好啊")}></button>
      <HYIncrement increment={increment}></HYIncrement>
    </div>
  );
});

export default App;
