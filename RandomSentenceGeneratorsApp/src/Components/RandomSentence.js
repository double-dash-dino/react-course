import "./RandomSentence.css";

const RandomSentence = (props) => {
  return (
    <div className="random-sentence">
      <button className="clear-button">X</button>
      <p>{props.sentence}</p>
    </div>
  );
};

export default RandomSentence;
