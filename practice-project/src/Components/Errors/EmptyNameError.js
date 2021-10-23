import "./EmptyNameError.css";
import Card from "../UI/Card.js";

const EmptyNameError = (props) => {
  const onClickHandler = (event) => {
    props.errorStatus("");
  };

  return (
    <div className="error-page">
      <Card className="error-message" onClick={onClickHandler}>
        <h2>Invalid input</h2>
      </Card>
    </div>
  );
};

export default EmptyNameError;
