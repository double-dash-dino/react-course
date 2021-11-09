import "./App.css";
import React, { useState } from "react";
import { parse } from "marked/src/marked";

// /* global marked */

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="input card">
        <div className="card-header">
          <div className="header-title">Editor</div>
          <button className="expand-button">
            <i class="fas fa-expand-arrows-alt"></i>Hi
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
          <div className="header-title">Editor</div>
          <button className="expand-button">
            <i class="fas fa-expand-arrows-alt"></i>Hi
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
