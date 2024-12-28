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

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Align the first update to the next exact second
    const update = () => setTime(new Date());
    const now = new Date();
    const delay = 1000 - now.getMilliseconds(); // Time until the next exact second

    // Set the initial timeout
    const timeoutId = setTimeout(() => {
      update();
      // Start the interval after syncing to the system clock
      const intervalId = setInterval(update, 1000);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, delay);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // Convert time to a string and map digits to images
  const timeString = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    /* second: "2-digit", */
    hour12: false,
  });

  const timeImages = timeString.split("").map((char, index) => {
    const imageSrc = digitsMap.get(char);
    if (!imageSrc) return null;

    // Apply different styles for the colon
    const imageStyle = char === ":" ? styles.colon : styles.digit;

    return <img key={index} src={imageSrc} alt={char} style={imageStyle} />;
  });

  return (
    <div>
      <div style={styles.numberedClock}>
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}
      </div>
      
      <div className="digit-container">
        <div align="center" style={styles.clock}>
          {timeImages}
        </div>
        {/* Uncomment the title and credits if needed */}
        {/* <div className="title-container">
              <h1 className="title" align="center">姉睇</h1>
              <div className="credit-container">
                <h2 className="credit" align="center">Designed by Declan Boushy</h2> 
                <h2 className="credit" align="center">Developed by Matthew Maciesowicz</h2>
              </div>
            </div> */}
      </div>
    </div>
  );
}

const styles = {
  numberedClock: {
    position: "absolute",
    top: "0.5vw",
    left: "0.5vw",
    fontSize: "30px"
  },
  clock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    userSelect: "none"
  },
  digit: {
    // width: "12vw",
    margin: "0 2vw",
  },
  colon: {
    width: "1.5vw",
    margin: "0 2vw",
  },
};

export default App;