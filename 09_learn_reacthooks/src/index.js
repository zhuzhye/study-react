import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './12_自定义hooks/App';
// import { UserContext, ThemeContext } from './05_useContext的使用/context';
import { UserContext, TokenContext } from './12_自定义hooks/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <UserContext.Provider value={{ name: "zzy", level: "99" }}>
  //   <ThemeContext.Provider value={{ color: 'red', size: 30 }} >
  //     <App />
  //   </ThemeContext.Provider>
  // </UserContext.Provider>

  <UserContext.Provider value={{ name: "zzy", level: "99" }}>
    <TokenContext.Provider value={{ token: 'zzytoken' }} >
      <App />
    </TokenContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);


