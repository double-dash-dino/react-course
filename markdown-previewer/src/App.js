import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const returnMarkdownText = (text) => {
    text = text.trim();
    let h1Tag = /^#(?!#)/g;
    let h2Tag = /^#{2}(?!#)/g;
    let h3Tag = /^#{3}(?!#)/g;
    let h4Tag = /^#{4}(?!#)/g;
    let h5Tag = /^#{5}(?!#)/g;
    let h6Tag = /^#{6}/g;
    if (h1Tag.test(text)) {
      text = <h1>{text.trim().replace(h1Tag, "")}</h1>;
    } else if (h2Tag.test(text)) {
      text = <h2>{text.trim().replace(h2Tag, "")}</h2>;
    } else if (h3Tag.test(text)) {
      text = <h3>{text.trim().replace(h3Tag, "")}</h3>;
    } else if (h4Tag.test(text)) {
      text = <h4>{text.trim().replace(h4Tag, "")}</h4>;
    } else if (h5Tag.test(text)) {
      text = <h5>{text.trim().replace(h5Tag, "")}</h5>;
    } else if (h6Tag.test(text)) {
      text = <h6>{text.trim().replace(h6Tag, "")}</h6>;
    }

    return text;
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
        <div className="output-ouput">{returnMarkdownText(input)}</div>
      </div>
    </div>
  );
}

export default App;
