import React, { memo, useId, useState } from "react";

const App = memo(() => {
  const id = useId();
  console.log(id);
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <label htmlFor={id}>
        用户名 <input type="text" id={id} />
      </label>
    </div>
  );
});

export default App;
