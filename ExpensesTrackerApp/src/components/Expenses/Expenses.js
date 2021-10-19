import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList.js"
import React, { useState } from "react";


function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2021")
  const onPickedYearHandler = (pickedYear) => {
    setPickedYear(pickedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={pickedYear}
        onPickedYear={onPickedYearHandler}
      />
      <ExpensesList pickedYear={pickedYear} expenses={props.expenses} />

    </Card>
  );
}
export default Expenses;
