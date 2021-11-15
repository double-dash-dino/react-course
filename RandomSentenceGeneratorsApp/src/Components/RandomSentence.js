import "./RandomSentence.css";

const clickHandler = () => {};

const RandomSentence = (props) => {
  return (
    <div className="random-sentence-box">
      <button className="clear-button" onClick={clickHandler}>
        X
      </button>
      <p className="sentence">{props.sentence}</p>
    </div>
  );
};

export default RandomSentence;
