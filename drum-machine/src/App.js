import "./App.css";
import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import bamboo_swing from "./assets/audio/bamboo_swing.wav";
import hi_hat from "./assets/audio/hi_hat.wav";
import snare_drum from "./assets/audio/snare.wav";
import kick_drum from "./assets/audio/kick.wav";
import trash_cymbal from "./assets/audio/trash-hard.wav";
import cowbell from "./assets/audio/cowbell.wav";
import crash_soft from "./assets/audio/crash-soft.wav";
import tom01 from "./assets/audio/tom01.wav";
import tom02 from "./assets/audio/tom02.wav";
import tom03 from "./assets/audio/tom03.wav";

const bambooSound = new UIfx(bamboo_swing, {
  volume: 1,
  throttleMs: 50,
});
const hiHat = new UIfx(hi_hat, {
  volume: 1,
  throttleMs: 0,
});

const snareDrum = new UIfx(snare_drum, {
  volume: 1,
  throttleMs: 0,
});

const kickDrum = new UIfx(kick_drum, {
  volume: 1,
  throttleMs: 0,
});

const trashCymbal = new UIfx(trash_cymbal, {
  volume: 1,
  throttleMs: 0,
});

const cowBell = new UIfx(cowbell, {
  volume: 1,
  throttleMs: 0,
});

const crashSoft = new UIfx(crash_soft, {
  volume: 1,
  throttleMs: 0,
});

const tom1 = new UIfx(tom01, {
  volume: 1,
  throttleMs: 0,
});

const tom2 = new UIfx(tom02, {
  volume: 1,
  throttleMs: 0,
});

const tom3 = new UIfx(tom03, {
  volume: 1,
  throttleMs: 0,
});

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [volume, setVolume] = useState("50");

  const handleVolume = (event) => {
    console.log(event.target.value);
    setVolume(event.target.value);
  };
  useEffect(() => {
    const handleKeydown = (event) => {
      setActiveKey(event.key);
      if (event.key === "q") {
        clickHandlerQ();
      } else if (event.key === "w") {
        clickHandlerW();
      } else if (event.key === "e") {
        clickHandlerE();
      } else if (event.key === "a") {
        clickHandlerA();
      } else if (event.key === "c") {
        clickHandlerC();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [activeKey]);

  const clickHandlerQ = () => {
    hiHat.play();
  };

  const clickHandlerW = () => {
    snareDrum.play();
  };

  const clickHandlerE = () => {
    kickDrum.play();
  };

  const clickHandlerA = () => {
    tom1.play();
  };

  const clickHandlerS = () => {
    tom2.play();
  };

  const clickHandlerD = () => {
    tom3.play();
  };

  const clickHandlerZ = () => {
    trashCymbal.play();
  };

  const clickHandlerX = () => {
    crashSoft.play();
  };

  const clickHandlerC = () => {
    cowBell.play();
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
                onClick={clickHandlerQ}
              >
                Q
              </button>
              <button className="drum-button" value="w" onClick={clickHandlerW}>
                W
              </button>
              <button className="drum-button" onClick={clickHandlerE}>
                E
              </button>
              <button className="drum-button" onClick={clickHandlerA}>
                A
              </button>
              <button className="drum-button" onClick={clickHandlerS}>
                S
              </button>
              <button className="drum-button" onClick={clickHandlerD}>
                D
              </button>
              <button className="drum-button" onClick={clickHandlerZ}>
                Z
              </button>
              <button className="drum-button" onClick={clickHandlerX}>
                X
              </button>
              <button className="drum-button" onClick={clickHandlerC}>
                C
              </button>
            </div>
          </div>
          <div className="drum-settings">
            Settings
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
            <div className="kit-toggle-setting">
              Settings 2<input type="range"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Audio credits:
// "Bamboo Swing, B3.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org

export default App;
