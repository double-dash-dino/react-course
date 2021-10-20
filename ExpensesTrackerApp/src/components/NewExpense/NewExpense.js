import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <button className="new-expense__actions">Add new expense</button>
      {/* <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;
