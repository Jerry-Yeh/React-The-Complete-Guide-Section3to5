/** @format */
import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from './ExpenseList';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChnageFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
};

export default Expense;
