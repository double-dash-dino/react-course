import "./RandomShakespeareInsultGenerator.css";
import React, { useState } from "react";

const RandomShakespeareInsultGenerator = (props) => {
  const shakespeare1 = [
    "gorbellied",
    "roguish",
    "impertinent",
    "frothy",
    "bawdy",
    "lascivious",
    "surly",
    "spleeny",
    "mumbling",
    "withered",
  ];
  const shakespeare2 = [
    "bacon-fed",
    "clapper-clawed",
    "beef-witted",
    "urchin-snouted",
    "onion-eyed",
    "rough-hewn",
    "pottle-deep",
    "toad-spotted",
    "clay-brained",
    "boil-brained",
  ];
  const shakespeare3 = [
    "fishmonger",
    "coxcomb",
    "miscreant",
    "bag of guts",
    "wagtail",
    "lewdster",
    "bugbear",
    "horn-beast",
    "horn-beast",
    "scurvy-knave",
    "malt-worm",
  ];

  const getNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const getSentence = () => {
    return (
      "I miss thee greatly, thou " +
      shakespeare1[getNumber()] +
      ", " +
      shakespeare2[getNumber()] +
      " " +
      shakespeare3[getNumber()] +
      "!"
    );
  };

  const [sentenceToDisplay, setSentenceToDisplay] = useState("");
  const clickHandler = (event) => {
    setSentenceToDisplay(getSentence());
    props.getSentence(sentenceToDisplay);
  };

  return (
    <div className="shakespeare-box">
      <p>Want to be insulted, Shakespeare style?</p>
      <button onClick={clickHandler} className="button-shakespeare">
        I shall
      </button>
    </div>
  );
};

export default RandomShakespeareInsultGenerator;
