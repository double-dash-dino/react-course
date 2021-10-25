import "./RandomSentenceGenerator.css";
import React, { useState } from "react";
import Card from "./UI/Card.js";
import RandomPepTalkGenerator from "./RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./RandomShakespeareInsultGenerator.js";
import RandomSentence from "./RandomSentence.js";

const RandomSentenceGenerator = (props) => {
  const [sentence, setSentence] = useState("");
  const onGetSentence = (sentence) => {
    setSentence(sentence);
  };

  return (
    <Card>
      <RandomPepTalkGenerator getSentence={onGetSentence} />
      <RandomShakespeareInsultGenerator getSentence={onGetSentence} />
      <RandomSentence sentence={sentence} />
    </Card>
  );
};

export default RandomSentenceGenerator;
