import React, { memo, useState, useDeferredValue } from "react";
import namesArray from "./namesArray";
const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const deferredValue = useDeferredValue(showNames);
  function inputValueChange(e) {
    let keyWord = e.target.value;
    const filterShows = namesArray.filter((item) => {
      return item.includes(keyWord);
    });
    setShowNames(filterShows);
  }
  return (
    <div>
      <input type="text" onInput={(e) => inputValueChange(e)} />
      <h2>用户名的列表:</h2>
      <ul>
        {deferredValue.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
