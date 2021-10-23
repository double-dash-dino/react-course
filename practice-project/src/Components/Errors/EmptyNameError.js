import "./EmptyNameError.css";
import Card from "../UI/Card.js";

const EmptyNameError = (props) => {
  return (
    <div className="error-page">
      <Card className="error-message">
        <h2>Invalid input</h2>
      </Card>
    </div>
  );
};

export default EmptyNameError;
