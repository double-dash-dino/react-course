import "./EmptyNameError.css";
import Card from "../UI/Card.js";

const EmptyNameError = (props) => {
  return (
    <Card className="error-page">
      <h2>Invalid input</h2>
    </Card>
  );
};

export default EmptyNameError;
