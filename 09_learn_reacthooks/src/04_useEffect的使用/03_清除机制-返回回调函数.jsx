import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  // 负责告知react，在执行完当前组件渲染之后要执行副作用代码
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const unubscribe = store.subscribe(() => {});
    console.log("监听了redux");
    //   返回值：回调函数=>组件重新渲染或者卸载的时候执行
    return () => {
      console.log("取消监听redux数据变化");
    };
  });
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1 ({count})</button>
    </div>
  );
});

export default App;
