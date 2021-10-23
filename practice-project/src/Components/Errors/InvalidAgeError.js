import "./ErrorPopUps.css";
import Card from "../UI/Card.js";

const InvalidAgeErrror = (props) => {
  const onClickHandler = (event) => {
    props.errorStatus("");
  };

  return (
    <div className="error-page" onClick={onClickHandler}>
      <Card className="error-message__title" onClick={onClickHandler}>
        <h2>Invalid age</h2>
        <Card className="error-message__detail">
          <p>Please enter a valid age (>0)</p>
        </Card>
      </Card>
    </div>
  );
};

export default InvalidAgeErrror;
