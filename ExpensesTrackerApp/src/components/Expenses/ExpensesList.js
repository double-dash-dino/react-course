import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {

  const expensesOfTheYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === props.pickedYear.toString()
  );


console.log(props.pickedYear, expensesOfTheYear)
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return expensesOfTheYear.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
};

export default ExpensesList;
