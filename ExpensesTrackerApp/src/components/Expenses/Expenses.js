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
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
