import "../page.css";
import React from "react";
import SinglePage from "./SinglePage";

const Todo = ({ todoArr }) => {
  //  console.log(todoArr)
  return (
    <div className="contentH4">
      <h3>Todo</h3>
      {todoArr.map((item) => {
        return <SinglePage key={item.id} datas={item} />;
      })}
    </div>
  );
};

export default Todo;

// data: Array(2)
// 0: {status: false, name: 'subtask 1 of 1'}
// 1: {status: false, name: 'subtask 1 of 1'}
// length: 2
// [[Prototype]]: Array(0)
// date: "17-10-2022"
// id: 1
// title: "Main Task 1"
// titleType: "Personal"
