// import logo from './logo.svg';
import digit0 from './images/Digit0.svg';
import digit1 from './images/Digit1.svg';
import digit2 from './images/Digit2.svg';
import digit3 from './images/Digit3.svg';
import digit4 from './images/Digit4.svg';
import digit5 from './images/Digit5.svg';
import digit6 from './images/Digit6.svg';
import digit7 from './images/Digit7.svg';
import digit8 from './images/Digit8.svg';
import digit9 from './images/Digit9.svg';
import colon from './images/Colon.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

const digitsMap = new Map([
  ["0", digit0],
  ["1", digit1],
  ["2", digit2],
  ["3", digit3],
  ["4", digit4],
  ["5", digit5],
  ["6", digit6],
  ["7", digit7],
  ["8", digit8],
  ["9", digit9],
  [":", colon],
]);


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

  // append leading 0 if length of string is only 1
  let hours = date.getHours().toString();
  hours = hours.length > 1 ? hours : ("0" + hours);
  let minutes = date.getMinutes().toString();
  minutes = minutes.length > 1 ? minutes: ("0" + minutes);

  // let seconds = date.getSeconds().toString();
  // seconds = seconds.length > 1 ? seconds: ("0" + seconds);
 
  const showTime = hours 
      + ':' + minutes;
      // + ":" + seconds;
  const showTimeDigits = showTime.split('');

  let listItems = [];
  let d;
  showTimeDigits.forEach((element) => {
    d = digitsMap.get(element);
    console.log(element);
    if (element === ":") {
      listItems.push(<img src={d} className="digit colon" alt="Colon" />);
    }
    else {
      listItems.push(<img src={d} className="digit" alt={"Digit" + element} />);
    }
    
  });

  return (
      <div className="App">
          {/* <h1 align="center">Current Time</h1>
          <h2 align="center"> {showTime}</h2> */}
         
          <div align="center" className="digit-container">
            {listItems}
          </div>
      </div>
  );
}

export default App;