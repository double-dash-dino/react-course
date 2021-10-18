import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2021");

  const expensesOfTheYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear.toString()
  );

  const onPickedYearHandler = (pickedYear) => {
    setPickedYear(pickedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedYear}
        onPickedYear={onPickedYearHandler}
      />
      }
      {expensesOfTheYear.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
