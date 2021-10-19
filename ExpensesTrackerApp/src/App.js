import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 240,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 50,
    date: new Date(2020, 4, 2),
  },
  {
    id: "e3",
    title: "Fencing bag",
    amount: 2400,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e4",
    title: "Drink with friend",
    amount: 240,
    date: new Date(2022, 1, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <p>JS is imperative. React is declarative</p>
    </div>
  );
};

export default App;
