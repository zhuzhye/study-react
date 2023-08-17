import React, { memo } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "add_number":
      return { ...state, counter: state.counter + action.num };
    case "sub_number":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

const App = memo(() => {
  //   const [count, setcount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      {/* <h2>当前计数：{count}</h2>
      <button onClick={(e) => setcount(count + 1)}>+1</button>
      <button onClick={(e) => setcount(count - 1)}>-1</button>
      <button onClick={(e) => setcount(count + 5)}>+5</button>
      <button onClick={(e) => setcount(count - 5)}>-5</button> */}
      <h2>当前计数：{state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 5 })}>+5</button>
      <button onClick={(e) => dispatch({ type: "sub_number", num: 5 })}>-5</button>
    </div>
  );
});

export default App;
