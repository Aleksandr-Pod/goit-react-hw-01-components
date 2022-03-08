import React from 'react';
import { App } from 'components/App';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
import './index.css';


// const elem = React.createElement('div', { a: 1 }, 'Привет', ', я твой друг');
// console.log(elem);

// const elem1 = React.createElement('span', { children: 'А это' });
// const elem1 = <span class="first">А это</span>;
// const elem2 = <span class="last">новый элемент</span>; // jsx syntaxis

// const jsxElem = (<div>{elem1} - {elem2}</div>) // jsx выражение
// console.log(jsxElem)

// ReactDOM.render(elem, document.querySelector('#root'));
// ReactDOM.render(jsxElem, document.querySelector('#root'));

// ReactDOM.render(<App />, document.querySelector('#root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);