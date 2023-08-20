import React, { memo, useEffect, useLayoutEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(9);
  useEffect(() => {
    console.log("useEffect");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return (
    <div>
      {count}
      <button onClick={(e) => setCount(count + 1)}> +1</button>
    </div>
  );
});

export default App;
