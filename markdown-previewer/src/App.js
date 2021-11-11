import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

import { marked, parse } from "marked/src/marked";
// import { icon } from "@fortawesome/fontawesome-svg-core";

// /* global marked */

function App() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: true,
    smartLists: true,
    smartypants: true,
    xhtml: true,
  });
  const [input, setInput] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  
  
  
  1. And last but not least, let's not forget embedded images:
  
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

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
    let iconToDisplay = "";
    if (cardSize === "") {
      iconToDisplay = faExpandAlt;
    } else {
      iconToDisplay = faCompressAlt;
    }
    return <FontAwesomeIcon icon={iconToDisplay} className="fa-2x" />;
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
          id="editor"
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
          id="preview"
          className="output-field"
          dangerouslySetInnerHTML={{ __html: parse(input) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
