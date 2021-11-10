import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAditing, setIsAditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAditing(false);
  };

  const startEditingHandler = () => {
    setIsAditing(true);
  };

  const stopEditingHandler = () => {
    setIsAditing(false);
  };

  return (
    <div className="new-expense">
      {!isAditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isAditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
