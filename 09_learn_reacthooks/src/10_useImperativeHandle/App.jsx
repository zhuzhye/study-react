import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";
const HelloWorld = memo(
  forwardRef((props, ref) => {
    let inputRef = useRef();
    // 子组件对父组件传入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    });
    return <input type="text" ref={inputRef}></input>;
  })
);
const App = memo(() => {
  const titleRef = useRef();
  const input = useRef();
  function handleDOM() {
    console.log(titleRef.current);
    console.log(input.current);
    input.current.focus();
    input.current.value = "hello world";
  }
  return (
    <div>
      <h2 ref={titleRef}> 哈哈哈</h2>
      <HelloWorld ref={input}></HelloWorld>
      <button onClick={handleDOM}>+1</button>
    </div>
  );
});

export default App;
