import React, { memo, useEffect, useState } from "react";
function useLogLife(Cname) {
  useEffect(() => {
    console.log(Cname + "first");
    return () => {
      console.log(Cname + "last");
    };
  });
}
const Home = memo(() => {
  useLogLife("home");
  return <h1>Home Page</h1>;
});
const About = memo(() => {
  useLogLife("about");
  return <h1>About Page</h1>;
});

const App = memo(() => {
  useLogLife("app");
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {!isShow && <About />}
    </div>
  );
});

export default App;
