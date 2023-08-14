import React, { memo } from "react";
import { useState, useEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    document.title = count;
    // 当前传入的回调函数会在组件被渲染后，自动执行
    // 网络请求/DOM操作/事件监听
  });

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
