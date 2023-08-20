import React, { memo, useState } from "react";
import { useUserToken } from "./hooks";
const Home = memo(() => {
  const [user, token] = useUserToken();
  console.log(user, token);
  return <h1>Home Page</h1>;
});
const About = memo(() => {
  return <h1>About Page</h1>;
});

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>
      <Home />
      <About />
    </div>
  );
});

export default App;
