import React, { memo, useState, useTransition } from "react";
import namesArray from "./namesArray";
const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const [pending, startTransition] = useTransition();
  function inputValueChange(e) {
    startTransition(() => {
      let keyWord = e.target.value;
      const filterShows = namesArray.filter((item) => {
        return item.includes(keyWord);
      });
      setShowNames(filterShows);
    });
  }
  return (
    <div>
      <input type="text" onInput={(e) => inputValueChange(e)} />
      <h2>用户名的列表:{pending && <span>loading...</span>}</h2>
      <ul>
        {showNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
