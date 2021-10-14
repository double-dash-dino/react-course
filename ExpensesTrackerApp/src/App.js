import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 240,
      date: new Date(2021, 6, 12),
    },
    {
      title: "Drugs",
      amount: 50,
      date: new Date(2021, 4, 2),
    },
    {
      title: "Police bribe",
      amount: 2400,
      date: new Date(2021, 2, 12),
    },
    {
      title: "Something",
      amount: 240,
      date: new Date(2021, 1, 1),
    },
  ];

  const addExpenseHandler = (expense) => {};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <p>JS is imperative. React is declarative</p>
    </div>
  );
}

export default App;
