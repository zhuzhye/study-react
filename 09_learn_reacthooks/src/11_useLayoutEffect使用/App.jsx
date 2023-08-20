import React, { memo, useState, useLayoutEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(9);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (count === 0) {
      setCount(Math.random() + 10);
    }
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={(e) => setCount(0)}> +1</button>
    </div>
  );
});

export default App;
