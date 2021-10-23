import "./ErrorPopUps.css";

const InvalidAgeErrror = (props) => {
  return (
    <div className="error-page" onClick={onClickHandler}>
      <Card className="error-message__title" onClick={onClickHandler}>
        <h2>Invalid input</h2>
        <Card className="error-message__detail">
          <p>Please enter a valid name and age (non-empty values)</p>
        </Card>
      </Card>
    </div>
  );
};
