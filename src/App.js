// import logo from './logo.svg';
import digit0 from './images/Digit0.svg'
import digit1 from './images/Digit1.svg'
import digit2 from './images/Digit2.svg'
import digit3 from './images/Digit3.svg'
import digit4 from './images/Digit4.svg'
import digit5 from './images/Digit5.svg'
import digit6 from './images/Digit6.svg'
import digit7 from './images/Digit7.svg'
import digit8 from './images/Digit8.svg'
import digit9 from './images/Digit9.svg'
import colon from './images/Colon.svg'
import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return time;
}

function App() {
  const date = Timer();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
  return (
      <div className="App">
          <h1 align="center">Current Time</h1>
          <h2 align="center"> {showTime}</h2>
      </div>
  );
}

export default App;