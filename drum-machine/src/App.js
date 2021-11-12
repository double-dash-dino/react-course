import "./App.css";
import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import bamboo_swing from "./assets/audio/bamboo_swing.wav";
import hi_hat from "./assets/audio/hi-hat.wav";

function App() {
  const bambooSound = new UIfx(bamboo_swing, {
    volume: 1,
    throttleMs: 100,
  });
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    const handleKeydown = (event) => {
      setActiveKey(event.key);
      console.log(event.key);
      if (event.key === "q") {
        clickHandler();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [activeKey]);

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
    bambooSound.play();
    console.log("Is clicked: ", isClicked);
  };

  return (
    <div className="App">
      <div className="drum-card">
        <div className="card-header">Welcome to the app</div>
        <div className="card-body">
          <div className="drum-pad">
            <div>Pad header</div>
            <div className="drum-buttons">
              {/* <audio id="sound1" src="../assets/audio/bamboo_swing.wav"></audio> */}

              <button
                className="drum-button"
                value="q"
                id="button1"
                onClick={clickHandler}
              >
                Q
              </button>
              <button className="drum-button" value="w">
                W
              </button>
              <button className="drum-button">E</button>
              <button className="drum-button">A</button>
              <button className="drum-button">S</button>
              <button className="drum-button">D</button>
              <button className="drum-button">Z</button>
              <button className="drum-button">X</button>
              <button className="drum-button">C</button>
            </div>
          </div>
          <div className="drum-settings">
            Settings
            <div>Settings 1</div>
            <div>Settings 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Audio credits:
// "Bamboo Swing, B3.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org

export default App;
