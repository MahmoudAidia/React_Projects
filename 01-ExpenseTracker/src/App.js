import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "Book purcahse",
  //   amount: 150,
  //   date: new Date(2020, 7, 25),
  // },
  // { id: "e2", title: "New Tv", amount: 200, date: new Date(2019, 8, 11) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 200,
  //   date: new Date(2018, 12, 2),
  // },
  // {
  //   id: "e4",
  //   title: "New personal computer",
  //   amount: 20,
  //   date: new Date(2021, 5, 9),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>;
    </div>
  );
};
export default App;
