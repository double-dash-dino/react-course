import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

import { parse } from "marked/src/marked";

// /* global marked */

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");
  const [inputCardSize, setInputCardSize] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const inputClickHandler = (event) => {
    if (inputCardSize === "") {
      setInputCardSize("expanded");
    } else {
      setInputCardSize("");
    }
  };

  const [outputCardSize, setOutputCardSize] = useState("");

  const OutputClickHandler = (event) => {
    if (outputCardSize === "") {
      setOutputCardSize("expanded");
    } else {
      setOutputCardSize("");
    }
  };

  const displayIcon = (cardSize) => {
    if (cardSize === "") {
      return <FontAwesomeIcon icon={faExpandAlt} className="fa-2x" />;
    } else {
      return <FontAwesomeIcon icon={faCompressAlt} className="fa-2x" />;
    }
  };

  return (
    <div className="App">
      <div className={"input card " + inputCardSize}>
        <div className="card-header">
          <div className="header-title">
            <h3>Editor</h3>
          </div>
          <button className="expand-button" onClick={inputClickHandler}>
            {displayIcon(inputCardSize)}
          </button>
        </div>
        <textarea
          onChange={inputChangeHandler}
          className={"input-field " + inputCardSize}
          type="text"
          value={input}
        ></textarea>
      </div>
      <div className={"output card " + outputCardSize}>
        <div className="card-header">
          <div className="header-title">
            <h3>Output</h3>
          </div>
          <button className="expand-button" onClick={OutputClickHandler}>
            {displayIcon(outputCardSize)}
          </button>
        </div>
        <div
          className="output-field"
          dangerouslySetInnerHTML={{ __html: parse(input) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
