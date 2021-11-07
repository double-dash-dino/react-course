import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="input card">
        <div className="input-header">Editor</div>
        <textarea
          onChange={inputChangeHandler}
          className="input-field"
          type="text"
          value={input}
        ></textarea>
      </div>
      <div className="output card">
        <div className="output-header">Previewer</div>
        <div className="output-ouput">{input}</div>
      </div>
    </div>
  );
}

export default App;
