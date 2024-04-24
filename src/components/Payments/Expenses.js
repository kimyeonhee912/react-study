import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem
          id={item.id} //filter 사용시
          index={index} //slice 사용시
          title={item.title}
          amount={item.amount}
          date={item.date}
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;
