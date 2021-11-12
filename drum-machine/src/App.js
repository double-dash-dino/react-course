import "./App.css";
import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import hi_hat from "./assets/audio/hi_hat.wav";
import snare_drum from "./assets/audio/snare.wav";
import kick_drum from "./assets/audio/kick.wav";
import trash_cymbal from "./assets/audio/trash-hard.wav";
import cowbell from "./assets/audio/cowbell.wav";
import crash_soft from "./assets/audio/crash-soft.wav";
import tom01 from "./assets/audio/tom01.wav";
import tom02 from "./assets/audio/tom02.wav";
import tom03 from "./assets/audio/tom03.wav";

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

const trashCymbal = new UIfx(trash_cymbal, {
  volume: 1,
  throttleMs: 0,
});

const crashSoft = new UIfx(crash_soft, {
  volume: 1,
  throttleMs: 0,
});

const cowBell = new UIfx(cowbell, {
  volume: 1,
  throttleMs: 0,
});

const sounds = [
  hiHat,
  snareDrum,
  kickDrum,
  tom1,
  tom2,
  tom3,
  trashCymbal,
  crashSoft,
  cowBell,
];

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [volume, setVolume] = useState(0.5);

  for (let i = 0; i < sounds.length; i++) {
    sounds[i].setVolume(volume);
  }

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
    hiHat.play();
  };

  const clickHandlerW = () => {
    setActiveKey("w");
    snareDrum.play();
  };

  const clickHandlerE = () => {
    setActiveKey("e");
    kickDrum.play();
  };

  const clickHandlerA = () => {
    setActiveKey("a");
    tom1.play();
  };

  const clickHandlerS = () => {
    setActiveKey("s");
    tom2.play();
  };

  const clickHandlerD = () => {
    setActiveKey("d");
    tom3.play();
  };

  const clickHandlerZ = () => {
    setActiveKey("z");
    trashCymbal.play();
  };

  const clickHandlerX = () => {
    setActiveKey("x");
    crashSoft.play();
  };

  const clickHandlerC = () => {
    setActiveKey("c");
    cowBell.play();
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
      <div className="drum-card">
        <div className="card-header">Make some noise!</div>
        <div className="card-body">
          <div className="drum-pad">
            <div className="drum-buttons">
              {/* <audio id="sound1" src="../assets/audio/bamboo_swing.wav"></audio> */}

              <button
                className="drum-button "
                value="q"
                id="button1"
                onClick={clickHandlerQ}
              >
                Q
              </button>
              <button
                className="drum-button "
                value="w"
                onClick={clickHandlerW}
              >
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
            <div className="sound-name">{instrumentName(activeKey)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Audio credits:
// "Bamboo Swing, B3.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org

export default App;
