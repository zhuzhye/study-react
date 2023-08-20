import React, { memo, useRef } from "react";

const App = memo(() => {
  let titleRef = useRef();
  let input = useRef();
  function showTitle() {
    console.log(titleRef.current);
    input.current.focus();
  }
  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input type="text" ref={input} />
      <button onClick={showTitle}>查看title的dom</button>
    </div>
  );
});

export default App;
