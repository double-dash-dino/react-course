import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2021");

  const onPickedYearHandler = (pickedYear) => {
    setPickedYear(pickedYear);
    console.log(pickedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedYear}
        onPickedYear={onPickedYearHandler}
      />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
export default Expenses;
