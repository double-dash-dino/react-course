import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import React, { useState } from "react";

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2021");
  const onPickedYearHandler = (pickedYear) => {
    setPickedYear(pickedYear);
  };
  const expensesOfTheYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear.toString()
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={pickedYear}
          onPickedYear={onPickedYearHandler}
        />
        <ExpensesChart expenses={expensesOfTheYear} />
        <ExpensesList pickedYear={pickedYear} expenses={expensesOfTheYear} />
      </Card>
    </li>
  );
}
export default Expenses;
