import "./RandomSentenceGenerator.css";
import React, { useState } from "react";
import RandomPepTalkGenerator from "./RandomGenerators/RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./RandomGenerators/RandomShakespeareInsultGenerator.js";
import RandomSentence from "./RandomSentence.js";

const RandomSentenceGenerator = (props) => {
  const [sentence, setSentence] = useState("");
  const onGetSentence = (sentence) => {
    setSentence(sentence);
  };

  return (
    <div>
      <h2>What do you need?</h2>
      <br />
      <div className="generator-controls">
        <RandomPepTalkGenerator getSentence={onGetSentence} />
        <RandomShakespeareInsultGenerator getSentence={onGetSentence} />
      </div>

      <RandomSentence sentence={sentence} />
    </div>
  );
};

export default RandomSentenceGenerator;
