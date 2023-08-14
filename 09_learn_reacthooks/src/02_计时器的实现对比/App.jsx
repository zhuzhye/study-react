import React from "react";
import { memo } from "react";
import ClassCounter from "./ClassCounter";
import CounterHook from "./CounterHook";

const App = memo(() => {
  return (
    <div>
      <h2>App Components</h2>
      <ClassCounter></ClassCounter>
      <CounterHook></CounterHook>
    </div>
  );
});
export default App;
