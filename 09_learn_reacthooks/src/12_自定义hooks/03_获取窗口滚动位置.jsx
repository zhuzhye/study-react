import React, { memo, useState } from "react";
import { useScrollPosition } from "./hooks";
import "./style.css";
const Home = memo(() => {
  return <h1>Home Page</h1>;
});
const About = memo(() => {
  return <h1>About Page</h1>;
});

const App = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  console.log([scrollX, scrollY]);
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="app">
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      <Home />
      <About />
    </div>
  );
});

export default App;
