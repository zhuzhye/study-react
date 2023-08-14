import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  // 负责告知react，在执行完当前组件渲染之后要执行副作用代码
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const unubscribe = store.subscribe(() => {});
    console.log("修改标题");
    //   返回值：回调函数=>组件重新渲染或者卸载的时候执行
    return () => {
      console.log("取消监听redux数据变化");
    };
  });
  // 一个函数式组件可以存在多个useEffect
  useEffect(() => {
    console.log("监听了redux数据");
    return () => {
      console.log("取消监听redux数据变化1");
    };
  });
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 ({count})</button>
    </div>
  );
});

export default App;
