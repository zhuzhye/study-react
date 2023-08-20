import React, { memo, useEffect, useState } from "react";
import "./style.css";
import { useLoaclStorage } from "./hooks";

const App = memo(() => {
  // 通过key，直接从loaclStorage中获取数据
  //   const [token, setToken] = useState(localStorage.getItem("token"));
  //   useEffect(() => {
  //     localStorage.setItem("token", token);
  //   }, [token]);
  const [token, setToken] = useLoaclStorage("token");
  function setTokenHandle() {
    setToken("zzx y");
  }

  const [avatar, setAvatar] = useState(localStorage.getItem("avatarURL"));
  useEffect(() => {
    localStorage.setItem("avatarURL", avatar);
  }, [avatar]);
  function setAvatarHandle() {
    setAvatar("https://www.baidu.com/img/flexible/logo/pc/result.png");
  }
  return (
    <div className="app">
      <h1>App Root {token} </h1>
      <button onClick={setTokenHandle}>设置token</button>
      <button onClick={setAvatarHandle}>设置新头像</button>
    </div>
  );
});

export default App;
