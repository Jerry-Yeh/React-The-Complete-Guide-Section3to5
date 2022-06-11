/** @format */

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 6, 4) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2022, 6, 3) },
    { title: "New TV", amount: 299.49, date: new Date(2022, 6, 2) },
    { title: "New Desk (Wooden)", amount: 450, date: new Date(2022, 6, 1) },
  ];

  const addExpenseHandler = expense => {
    console.log('App.js', expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
