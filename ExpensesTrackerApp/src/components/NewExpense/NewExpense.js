import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import React, {useState} from "react"

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayExpenseForm(false)
  };

  const [displayExpenseForm, setDisplayExpenseForm] = useState(false)
  const onClickHandler = () => {
    if (displayExpenseForm === true) {
      setDisplayExpenseForm(false) 
    } else {
      setDisplayExpenseForm(true)
    }
  }

  console.log("displayExpenseForm is", displayExpenseForm)

  if (displayExpenseForm === false) {
return (
  <div className="new-expense">
      <button className="new-expense__actions" onClick={onClickHandler}>Add new expense</button>    
    </div>
)
  } else {
  return (
    <div className="new-expense">

<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
<button className="new-expense__actions" onClick={onClickHandler}>Cancel</button>
      
    </div>
  )};
};

export default NewExpense;
