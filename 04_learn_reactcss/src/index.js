import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './06_classnames库/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: 'red', size: '30' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// ES6标签模板字符串
// const age = 18
// const name = 'zhangsan'
// const str = `my name is ${name} age is ${age}`
// console.log(str)

// // ES6标签模板字符串的使用
// function foo(...args) {
//   console.log(args)
// }

// foo`my name is ${name} age is ${age}`