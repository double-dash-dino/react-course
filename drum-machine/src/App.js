import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [volume, setVolume] = useState(0.5);

  const handleVolume = (event) => {
    setVolume(parseFloat(event.target.value));
  };
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "q") {
        clickHandlerQ();
      } else if (event.key === "w") {
        clickHandlerW();
      } else if (event.key === "e") {
        clickHandlerE();
      } else if (event.key === "a") {
        clickHandlerA();
      } else if (event.key === "s") {
        clickHandlerS();
      } else if (event.key === "d") {
        clickHandlerD();
      } else if (event.key === "z") {
        clickHandlerZ();
      } else if (event.key === "x") {
        clickHandlerX();
      } else if (event.key === "c") {
        clickHandlerC();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [activeKey, volume]);

  const clickHandlerQ = () => {
    setActiveKey("q");
    document.getElementById("hi-hat-audio").play();
  };

  const clickHandlerW = () => {
    setActiveKey("w");
  };

  const clickHandlerE = () => {
    setActiveKey("e");
  };

  const clickHandlerA = () => {
    setActiveKey("a");
  };

  const clickHandlerS = () => {
    setActiveKey("s");
  };

  const clickHandlerD = () => {
    setActiveKey("d");
  };

  const clickHandlerZ = () => {
    setActiveKey("z");
  };

  const clickHandlerX = () => {
    setActiveKey("x");
  };

  const clickHandlerC = () => {
    setActiveKey("c");
  };

  const instrumentName = (key) => {
    switch (key) {
      case "q":
        return "Hi-hat";
      case "w":
        return "Snare drum";
      case "e":
        return "Kick drum";
      case "a":
        return "Tom 1";
      case "s":
        return "Tom 2";
      case "d":
        return "Tom 3";
      case "z":
        return "Trash cymbal";
      case "x":
        return "Crash cymbal";
      case "c":
        return "Cow bell";
      default:
        return "Try pressing a key";
    }
  };

  return (
    <div className="App">
      <div id="drum-machine" className="drum-card">
        <div className="card-header">Make some noise!</div>
        <div className="card-body">
          <div className="drum-buttons">
            <button
              className="drum-pad"
              value="q"
              id="hi-hat"
              onClick={clickHandlerQ}
            >
              <audio
                id="hi-hat-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/hi_hat.wav"
              ></audio>
              Q
            </button>
            <button
              id="snare-drum"
              className="drum-pad "
              value="w"
              onClick={clickHandlerW}
            >
              <audio
                id="snare-drum-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/snare.wav"
              ></audio>
              W
            </button>
            <button id="kick-drum" className="drum-pad" onClick={clickHandlerE}>
              E
              <audio
                id="kick-drum-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/kick.wav"
              ></audio>
            </button>
            <button id="tom1" className="drum-pad" onClick={clickHandlerA}>
              <audio
                id="tom-01-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/tom01.wav"
              ></audio>
              A
            </button>
            <button id="tom2" className="drum-pad" onClick={clickHandlerS}>
              <audio
                id="tom-02-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/tom02.wav"
              ></audio>
              S
            </button>
            <button id="tom3" className="drum-pad" onClick={clickHandlerD}>
              <audio
                id="tom-03-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/tom03.wav"
              ></audio>
              D
            </button>
            <button
              id="trash-cymbal"
              className="drum-pad"
              onClick={clickHandlerZ}
            >
              <audio
                id="trash-cymbal-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/trash-hard.wav"
              ></audio>
              Z
            </button>
            <button
              id="crash-cymbal"
              className="drum-pad"
              onClick={clickHandlerX}
            >
              <audio
                id="crash-cymbal-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/crash-soft.wav"
              ></audio>
              X
            </button>
            <button id="cow-bell" className="drum-pad" onClick={clickHandlerC}>
              C
              <audio
                id="cow-bell-audio"
                src="https://react-course-assets.s3.eu-west-2.amazonaws.com/audio/cowbell.wav"
              ></audio>
            </button>
          </div>
          <div className="drum-settings">
            <div className="volume-setting">
              Volume
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="volume-slider"
                onChange={handleVolume}
              ></input>
            </div>
            <div id="display" className="sound-name">
              {instrumentName(activeKey)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
