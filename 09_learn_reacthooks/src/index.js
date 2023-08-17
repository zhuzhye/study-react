import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './08_useMemo/App';
import { UserContext, ThemeContext } from './05_useContext的使用/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: "zzy", level: "99" }}>
    <ThemeContext.Provider value={{ color: 'red', size: 30 }} >
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);


