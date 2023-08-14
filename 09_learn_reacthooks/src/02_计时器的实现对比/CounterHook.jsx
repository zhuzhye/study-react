import { memo, useState } from "react";
// 普通的函数，里面不能使用hooks
// 在自定的hooks中，可以使用react提供其他的hooks：必须以use开头
function useFoo(props) {
  const [message] = useState("hello");
  return message;
}

function CounterHook(props) {
  const [counter, setCounter] = useState(0);
  const message = useFoo();
  return (
    <div>
      <h2>{message}</h2>
      <h2>当前计数：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
}

export default memo(CounterHook);
