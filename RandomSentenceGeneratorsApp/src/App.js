import "./App.css";
import Card from "./Components/UI/Card.js";
import RandomPepTalkGenerator from "./Components/RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./Components/RandomShakespeareInsultGenerator.js";
import React, { useState } from "react";

const [sentence, setSentence] = useState("");

const onGetSentence = (sentence) => {
  setSentence(sentence);
};

function App() {
  return (
    <div className="App">
      <Card>
        <div className="App-header">
          <RandomPepTalkGenerator getSentence={onGetSentence} />
          <RandomShakespeareInsultGenerator getSentence={onGetSentence} />
          <RandomSentence sentence={sentence} />
        </div>
      </Card>
    </div>
  );
}

export default App;
