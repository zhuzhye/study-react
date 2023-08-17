import React, { memo } from "react";
import { useState, useMemo } from "react";

function clacNumberTotal(num) {
  console.log("重新调用");
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}
const App = memo(() => {
  const [count, setCount] = useState(0);
  let result = useMemo(() => {
    return clacNumberTotal(50);
  }, []);

  //4.使用useMemo对子组件进行优化 每次渲染是新对象
  const info = useMemo(() => ({ name: "zzy" }), []);
  console.log(info);
  return (
    <div>
      <h2>计算结果:{result}</h2>
      <h2>计数器：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
