import "./App.css";
import React, { useState } from "react";

function App() {
  const logKey = (event) => {
    console.log(event.key === "q");
    if (event.key === "q") {
      document.getElementById("button1").click();
    }
    event.Handled = true;
  };
  document.addEventListener("keydown", logKey);
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
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
            <div>Settings1</div>
            <div>Settings 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
