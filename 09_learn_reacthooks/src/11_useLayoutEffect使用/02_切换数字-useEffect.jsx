import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(9);
  useEffect(() => {
    console.log("useEffect");
    if (count === 0) {
      setCount(Math.random() + 10);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {count}
      <button onClick={(e) => setCount(0)}> +1</button>
    </div>
  );
});

export default App;
