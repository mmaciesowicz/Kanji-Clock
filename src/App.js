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

const messages = {
  "15:15": {
    upper: "目目目目目目目目",
    lower: "目目目目目目目",
  },
  "16:15": {
    upper: "Grab fast My Arms with Innocence\nPut Wrong to death and wipe out Lust\nAnd give My Nape new redolence\nYour drumming vaulted Sky I trust",
    lower: "Eyes squint and so Perfumes spring forth\nBoth Suns do make both Dark and Light\nThey blaze within the frigid north\nTheir furnace Vows shoot through the Height",
  },
  "17:15": {
    upper: "And if You want to weep, then weep\nIf shouting is Your urge, then shout\nIf You must cough, no silence keep\nLove wills that You not go without",
    lower: "Eight Eyes and Hands that won’t let go\nOld Melting done; forever sealed\nI sought and sought and now I know\nThe brightest Light in blackest field",
  },
  "18:15": {
    upper: "Take fast the fifty aurous rings\nTake fast the quinquagintal net\nAnd guide me with my greener wings\nGrown up to hundred hands I’ll get",
    lower: "Displace the cold imposter things\nWhich blow and make my window wet\nAnd ape the winter wind that sings\nAnd moves my heart to sweet duet",
  },
  "19:15": {
    upper: "I’m injured by the wind that brings\nDeep love and not a single threat\nA wondrous loyal one who slings\nHer spears ‘gainst demons some forget",
    lower: "You speak with light unknown to kings\nYou’ve had me since we always met\nI long so sorely for your clings\nCome kiss the ancient wound you set",
  },
  "20:15": {
    upper: "Someday you will ask me\nWhy I appreciate funerals and graveyards so\nAnd I will tell you the answer\nNot knowing that you already know the answer",
    lower: "Someday you will ask me\nTo go downstairs to get you a drink of water\nAnd you will wait\nNot knowing that I poured the jug with both hands",
  },
  "21:15": {
    upper: "Someday you will ask me\nTo come to \nA large party\nAt your house",
    lower: "And I\nWill agree\nNot knowing\nThat I am the only one invited",
  },
  "22:15": {
    upper: "Someday you will ask me\n“What’s your favourite food?”\nAnd I will say\n“That thing your mother made once”",
    lower: "And you will walk away\nThinking I meant\nSalmon coulibiac\nNot knowing what I’m actually referring to",
  },
  "23:15": {
    upper: "Someday you will challenge me\nTo search\nYour house\nFor your treasure",
    lower: "And I will agree\nAnd I will search and search\nAll afternoon\nNot knowing that I am that treasure",
  },
  "00:15": {
    upper: "Someday a great bell will ring\nAnd I will know\nThat you are here\nAnd I will finally discover",
    lower: "Which symbols are those\nThat I wrote down\nDay after night and night after day\nNot knowing that they are part of your name",
  },
  "01:15": {
    upper: "Oh, My Love\nHere I am; I am so green with love\nSo green with green love evergreen\nI am moved to such vehement humility",
    lower: "Such irreproachable articulations\nTotally free and inexorable\nEven attended by fractal declamations\nRest Your amiable countenance as You like",
  },
  "02:15": {
    upper: "Such frightening gentleness\nIf I am drunk, I am drunk on You\nSo deeply blue and green with love\nThat if You, My Love, were to crack some lapis",
    lower: "Even a small piece, or mow the lawn\nReaping much or just one blade of grass\nYou would cut a piece of Me\nOvercome by Your luminous care",
  },
  "03:15": {
    upper: "Unbounded care so closely vowed\nWhich clouds the milk and milks the cloud\nI sprinkle many drops on this mountain\nLeaving pride behind, burned beyond ash",
    lower: "Leaving pride behind, even burned to nothing\nDutifully, here I stand\nWith a lump of pure white snow in My glove\nEvery day and night is joyous and bitter",
  },
  "04:15": {
    upper: "Long is this river that screams Your name and\nLauds high Your care of shining ilk\nWhich milks the cloud and clouds the milk\nIf I am drunk, I am drunk on You alone",
    lower: "Tea which You have poured for Me\nHas started to settle in its cup\nMore green and green each day We grow\nEven much more than truly evergreen",
  },
  "05:15": {
    upper: "The universe is either underlyingly deterministic or not...\nBoth of these options are truly amazing\nThe womb either loves the child or not...\nBoth of these options are verily amazing",
    lower: "The sun either has a soul or it does not and never did...\nBoth of these options are truly amazing\nThere is either free will or there isn't...\nBoth of these options are verily amazing",
  },
  "06:15": {
    upper: "The universe either had a start or it didn't...\nBoth of these options are truly amazing\nThere is either life out there in outer space or there isn't...\nBoth of these options are verily amazing",
    lower: "There is either intelligent life out there in outer space or there isn't...\nBoth of these options are truly amazing\nMan either dies forever or lives forever...\nBoth of these options are verily amazing",
  },
  "07:15": {
    upper: "Whenever lightning flashes\nI am struck with the thought\nThat the heavens above could\nBring me to you in an instant",
    lower: "Bring you to me in that very instant\nBring me to your arms before the next moment\nOr at least\nBring us together before the thunder rolls",
  },
  "08:15": {
    upper: "Ahh,\nI\nLet out\nA sigh",
    lower: "Ah—\n— The wind\nBreathes out a scream\nFamily resemblance",
  },
  "09:15": {
    upper: "The doorbell rings\nShort ring\nlong ring\nLittle pause",
    lower: "Long ring\nShort ring\nLittle pause\nShort ring",
  },
  "10:15": {
    upper: "Soon\nWe will have a race\nAround the large and round and domed\nGolden Pavilion Of The Eight Trigrams",
    lower: "You will start by the south threshold\nAnd I will start by the north threshold\nYou will wear white with black crests\nAnd I will wear black with white crests",
  },
  "11:15": {
    upper: "Whoever catches the other one first wins\n…What splendid traditions your family has…\nChase my footsteps as I chase yours!\nChase my abdomen as I chase yours!",
    lower: "Chase my arms and chest as I chase yours!\nChase my upper-back crest as I chase yours!\nChase my calling voice as I chase yours!\nChase my face as I chase yours!",
  },
  "12:15": {
    upper: "I\nLove\nThe\nWay",
    lower: "You\nSay\n“Five\nMinutes”",
  },
  "13:15": {
    upper: "You!\nNot Maia\nNot Alcyone\nNot Asterope",
    lower: "Not Celaeno\nNot Taygete\nNot Electra\nNot Merope",
  },
  "14:15": {
    upper: "The winter wind’s the only wind that’s been and this is right\nIf you’ve heard crying gales with trails of seal-script tears in sight\nIt is the wind in constant, ancient search with all her might\nShe seeks her little bridegroom, longing sore to hold him tight",
    lower: "Advancing stannous copper bells ring loudly on the height\nThe sun descends below the sea and all is far less bright\nHer hundred hands as fair as snow through every space make flight\nAnd skillfully unfurl the secret hours of the night",
  },
};

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

    // const formattedTime = timeString;
    const formattedTime = "00:15";
    const isSpecialTime = formattedTime === "15:15";
    
    const styles = {
      container: {
        height: "100vh",
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        textAlign: "center",
        alignItems: "center"
      },
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
        width: "18vw",
        margin: "0 2vw",
      },
      colon: {
        width: "1.5vw",
        margin: "0 2vw",
      },
      upperText: {
        fontSize: isSpecialTime ? "10vmin" :"3vmin",
        lineHeight: isSpecialTime ? "10vh": "8vh",
        textAlign: "center",
        color: "black",
        fontStyle: isSpecialTime ? "normal" :'italic',
        whiteSpace: isSpecialTime ? "nowrap" : "none",
        margin: "0 0 0 0",
        // overflow: "hidden",
        position: "absolute",
        bottom: "0.5em",
        left: "50%",
        transform: "translateX(-50%)",
      },
      lowerText: {
        fontSize: isSpecialTime ? "10vmin" :"3vmin",
        lineHeight: isSpecialTime ? "10vh": "8vh",
        textAlign: "center",
        color: "black",
        fontStyle: isSpecialTime ? "normal" :'italic',
        // whiteSpace: "nowrap",
        margin: "0.5em 1em 0 1em",
        overflow: "hidden",
      },
      textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribute lines evenly
        height: "100%", // Take full height of the parent
        position: "relative",
      },
    };
    
    const upperText = messages[formattedTime]?.upper || "";
    const lowerText = messages[formattedTime]?.lower || "";

  const timeImages = timeString.split("").map((char, index) => {
    const imageSrc = digitsMap.get(char);
    if (!imageSrc) return null;

    // Apply different styles for the colon
    const imageStyle = char === ":" ? styles.colon : styles.digit;

    return <img key={index} src={imageSrc} alt={char} style={imageStyle} />;
  });


  return (
    <div style={styles.container}>
      <div style={styles.numberedClock}>
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}
      </div>
      <div style={styles.textContainer}>
        {upperText && (
            <div style={styles.upperText}>
              {upperText.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          )}
      </div>
      <div className="digit-container">
        <div align="center" style={styles.clock}>
          {timeImages}
        </div>
      </div>
      <div style={styles.textContainer}>
      {lowerText && (
          <div style={styles.lowerText}>
            {lowerText.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default App;