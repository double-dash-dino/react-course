import "./RandomSentence.css";

const RandomSentence = (props) => {
  const clickHandler = () => {
    props.clearSentence("");
  };
  return (
    <div className="random-sentence-box">
      {props.sentence.length < 0 && (
        <button className="clear-button" onClick={clickHandler}>
          {" "}
          X
        </button>
      )}

      <p className="sentence">{props.sentence}</p>
    </div>
  );
};

export default RandomSentence;
