import "./RandomSentence.css";
import React, { useState } from "react";

const RandomSentence = (props) => {
  const [displayClearButton, setDisplayClearButton] = useState(false);

  const clickHandler = () => {
    setDisplayClearButton(!displayClearButton);
    props.clearSentence("");
  };
  return (
    <div className="random-sentence-box">
      {displayClearButton && (
        <button className="clear-button" onClick={clickHandler}>
          X
        </button>
      )}

      <p className="sentence">{props.sentence}</p>
    </div>
  );
};

export default RandomSentence;
