import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  // 负责告知react，在执行完当前组件渲染之后要执行副作用代码
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello");
  useEffect(() => {
    console.log("修改title");
    return () => {};
  }, [message]);
  // 一个函数式组件可以存在多个useEffect
  useEffect(() => {
    console.log("监听redux的数据");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("监听");
    return () => {
      console.log("会在组件被卸载时，执行一次");
    };
  }, []);

  // useEffect('回调函数',[])
  // 参数一：执行回调函数
  // 参数二：该useEffect在那些state变化式，才重新执行

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 ({count})</button>
      <button onClick={(e) => setMessage("xxx")}>+1 ({message})</button>
    </div>
  );
});

export default App;
