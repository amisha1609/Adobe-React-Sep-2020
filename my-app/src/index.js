import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import store from './store';
import Spinner from './Spinner';
import { Provider } from 'react-redux';
import BugTracker from './bugTracker';

ReactDOM.render(
  <Provider store={store}>
      <h1>My App</h1>
      <hr/>
      <Spinner/>
      <BugTracker/>
  </Provider>
  , document.getElementById('root')
);

/* 
function renderApp() {
  const value = store.getState();
  ReactDOM.render(
    <Spinner
      value={value}
      dispatch={store.dispatch}
      {...spinnerActionCreators}
    />,
    document.getElementById("root")
  );
}
renderApp();
store.subscribe(renderApp); */

/* ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//ES6 Modules

/* 
import * as calc from './calc';
console.log(calc); 
*/

/* 
import * as calc from './calc';
const { add } = calc;
*/

/* 
import { add } from './calc ;
*/

/* 
importing the default exported object
*/

/* 
import calc from "./calc";
console.log(calc); 
*/