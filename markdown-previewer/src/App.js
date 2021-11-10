import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { parse } from "marked/src/marked";

// /* global marked */

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");
  const [isExpanded, setIsExpanded] = useState(false);
  const [display, setDisplay] = useState("");

  const changeHandler = (props) => {};

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  let card_styles = "";

  const clickHandler = (event) => {
    if (isExpanded) {
      setIsExpanded(false);
      card_styles = "";
    } else {
      setIsExpanded(true);
      card_styles = " expanded";
    }
    console.log("is now", isExpanded, card_styles);
  };

  return (
    <div className="App">
      <div className={"input card" + card_styles} onChange={changeHandler}>
        <div className="card-header">
          <div className="header-title">
            <h3>Editor</h3>
          </div>
          <button className="expand-button" onClick={clickHandler}>
            <FontAwesomeIcon icon={faExpandAlt} className="fa-2x" />
          </button>
        </div>
        <textarea
          onChange={inputChangeHandler}
          className="input-field"
          type="text"
          value={input}
        ></textarea>
      </div>
      <div className="output card">
        <div className="card-header">
          <div className="header-title">
            <h3>Output</h3>
          </div>
          <button className="expand-button">
            <FontAwesomeIcon icon={faExpandAlt} className="fa-2x" />
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
