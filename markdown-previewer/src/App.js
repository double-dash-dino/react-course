import "./App.css";
import React, { useState } from "react";
import { parse } from "marked/src/marked";

/* global marked */

function App() {
  const [input, setInput] = useState("# Welcome to the markdown previewer");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const returnMarkdownText = (text) => {
    // text = text.trim();

    // text = text.split("\n");
    // let h1Tag = /^#(?!#)/g;
    // let h2Tag = /^#{2}(?!#)/g;
    // let h3Tag = /^#{3}(?!#)/g;
    // let h4Tag = /^#{4}(?!#)/g;
    // let h5Tag = /^#{5}(?!#)/g;
    // let h6Tag = /^#{6}/g;
    // let codeSnippetTag = /`{3}((.|\n)*)`{3}/;

    // for (let i = 0; i < text.length; i++) {
    //   if (h1Tag.test(text[i])) {
    //     text[i] = <h1>{text[i].trim().replace(h1Tag, "")}</h1>;
    //   } else if (h2Tag.test(text[i])) {
    //     text[i] = <h2>{text[i].trim().replace(h2Tag, "")}</h2>;
    //   } else if (h3Tag.test(text[i])) {
    //     text[i] = <h3>{text[i].trim().replace(h3Tag, "")}</h3>;
    //   } else if (h4Tag.test(text[i])) {
    //     text[i] = <h4>{text[i].trim().replace(h4Tag, "")}</h4>;
    //   } else if (h5Tag.test(text[i])) {
    //     text[i] = <h5>{text[i].trim().replace(h5Tag, "")}</h5>;
    //   } else if (h6Tag.test(text[i])) {
    //     text[i] = <h6>{text[i].trim().replace(h6Tag, "")}</h6>;
    //   } else if (codeSnippetTag.test(text[i])) {
    //     text[i] = (
    //       <p className="codeSnippet">{text[i].trim().replaceAll("```", "")}</p>
    //     );
    //   }
    // }

    return text;
  };
  const parsedMarkdown = parse(input);

  // const html = marked("# Marked in React\n\nRendered by **marked**.");

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
        <div
          className="output-field"
          dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
        >
          {/* {returnMarkdownText(input)}
           */}

          {/* <p dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
