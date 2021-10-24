import "./App.css";
import Card from "./Components/UI/Card.js";
import RandomPepTalkGenerator from "./Components/RandomPepTalkGenerator.js";
import RandomShakespeareInsultGenerator from "./Components/RandomShakespeareInsultGenerator.js";
import React, { useState } from "react";
import RandomSentenceGenerator from "./Components/RandomSentenceGenerator.js";

const [sentence, setSentence] = useState("");

const onGetSentence = (sentence) => {
  setSentence(sentence);
};

function App() {
  return (
    <div className="App">
      <Card>
        <div className="App-header">
          <RandomSentenceGenerator>
            <RandomPepTalkGenerator getSentence={onGetSentence} />
            <RandomShakespeareInsultGenerator getSentence={onGetSentence} />
            <RandomSentence sentence={sentence} />
          </RandomSentenceGenerator>
        </div>
      </Card>
    </div>
  );
}

export default App;
