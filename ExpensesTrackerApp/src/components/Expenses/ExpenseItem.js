import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">£{props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;

// useState is a react hook. Hooks have to be called inside component functions
// It always returns an array with 2 elements, the first of which is the current state value, and the second is what the new value is
