import "./RandomSentenceGenerator.css";
import React, { useState } from "react";
import RandomPepTalkGenerator from "./RandomGenerators/RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./RandomGenerators/RandomShakespeareInsultGenerator.js";
import RandomSentence from "./RandomSentence.js";
import RandomThankYouGenerator from "./RandomGenerators/RandomThankYouGenerator.js";
import RandomBirthdayWishGenerator from "./RandomGenerators/RandomBirthdayWishGenerator.js";
import RandomCongratulationsGenerator from "./RandomGenerators/RandomCongratulationsGenerator.js";

const RandomSentenceGenerator = (props) => {
  const [sentence, setSentence] = useState("");
  const onGetSentence = (sentence) => {
    setSentence(sentence);
  };
  const clickHandler = (event) => {
    setSentence("");
  };

  return (
    <div>
      <h2>What do you need?</h2>
      <br />
      <div className="generator-controls">
        <RandomPepTalkGenerator getSentence={onGetSentence} />
        <RandomShakespeareInsultGenerator getSentence={onGetSentence} />
        <RandomThankYouGenerator getSentence={onGetSentence} />
        <RandomBirthdayWishGenerator getSentence={onGetSentence} />
        <RandomCongratulationsGenerator getSentence={onGetSentence} />
      </div>

      <div className="sentence-display">
        <RandomSentence sentence={sentence} />
        {sentence.length > 0 && (
          <button onClick={clickHandler} className="generator-controls">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default RandomSentenceGenerator;
