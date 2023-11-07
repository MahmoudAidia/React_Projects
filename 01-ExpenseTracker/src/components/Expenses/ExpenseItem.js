import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;

// useState definition
// useState(Takes value that will change) and returns 2 values :
// 1- The value of the variable you passed to the function at first
// 2- An Updating function that will be used to alter or change this value
// 3- To change the value and make React rerender the page, then we use the updating function that we named

// This is so called object destructuring
// const userInfo = { id: 5, age: 15, course: "Mathematics" };
// const { id, age, course } = userInfo;
