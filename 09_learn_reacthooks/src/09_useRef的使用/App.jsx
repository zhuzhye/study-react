import React, { memo, useCallback, useRef, useState } from "react";
let obj = null;
const App = memo(() => {
  const [count, setCount] = useState(0);
  const nameRef = useRef();
  console.log(obj === nameRef);
  obj = nameRef;

  const countRef = useRef();
  countRef.current = count;
  const increament = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2 ref={nameRef}>Hello World{count}</h2>
      <button onClick={(e) => increament()}>+1</button>
    </div>
  );
});

export default App;
