import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('bg-black');

  function handleClick() {
    console.log("Button clicked");
    if (backgroundColor === 'bg-black') {
      console.log(`Setting to ${backgroundColor}`);
      setBackgroundColor('bg-white');
    } else {
      console.log(`Setting to ${backgroundColor}`);
      setBackgroundColor('bg-black');
    }
  }

  function BackgroundButton() {
    return (
      <button onClick={handleClick}>
        Change Background Color
      </button>
    );
  }

  return (
    <div className={`App ${backgroundColor}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={`text-4xl text-orange-500 font-bold`}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BackgroundButton />
      </header>
    </div>
  );
}

export default App;
