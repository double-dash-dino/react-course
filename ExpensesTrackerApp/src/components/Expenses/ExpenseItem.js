import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">£{props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;

// useState is a react hook. Hooks have to be called inside component functions
// It always returns an array with 2 elements, the first of which is the current state value, and the second is what the new value is
