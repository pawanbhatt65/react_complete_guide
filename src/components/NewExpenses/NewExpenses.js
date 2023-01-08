import React, { useState } from "react";
import FormExpenses from "./FormExpenses";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpenses(expenseData);
  };

  const showFormHandler = () => {
    setIsEditing(true);
  };

  const hideFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add Expenses</button>}
      {isEditing && (
        <FormExpenses
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
