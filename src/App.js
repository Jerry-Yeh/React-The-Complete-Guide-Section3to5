/** @format */

import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'el1', title: "Car Insurance", amount: 294.67, date: new Date(2022, 6, 4) },
  { id: 'el2', title: "Toilet Paper", amount: 94.12, date: new Date(2022, 6, 3) },
  { id: 'el3', title: "New TV", amount: 299.49, date: new Date(2020, 6, 2) },
  { id: 'el4', title: "New Desk (Wooden)", amount: 450, date: new Date(2019, 6, 1) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];  
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
