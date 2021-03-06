import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimerContainer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TimerContainer/>
      </header>
    </div>
  );
}

export default App;
