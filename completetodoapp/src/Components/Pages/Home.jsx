import "./page.css";

import { Routes, Route ,Link} from "react-router-dom";
import React, { useEffect } from "react";
import UserDetails from "./sidebar/UserDetails";
import Logout from "./sidebar/Logout";
import TodoDetails from "./sidebar/TodoDetails";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData } from "../AppReducer/action";
import {
  addInCompleted,
  addInInProgress,
  addInTodo,
} from "../AppReducer/action2";
import Content from "./content/Content";
import AddNewTask from "./InputBox/AddNewTask";

const Home = () => {
  // const {todo,inProgress,detail}  =

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.appReducer);
  const { todoArr, inprogressArr, completedArr } = useSelector(
    (state) => state.reducer2
  );
  // console.log(todoArr , inprogressArr , completedArr , "todoArr , inprogressArr , completedArr")
  // console.log("data", todos);
  console.log("vivek");

  const getDataHome = () => {
    dispatch(getData());
  };
  //data
  //need to filter data according to 3
  const filterData = () => {
    todos?.map((elem) => {
      let filterData = elem.data.filter((item) => item.status === true);
      // console.log(filterData.length);
      if (filterData.length === elem.data.length) {
        dispatch(addInCompleted(elem));
      } else if (
        filterData.length > 0 &&
        filterData.length < elem.data.length
      ) {
        dispatch(addInInProgress(elem));
      } else {
        dispatch(addInTodo(elem));
      }
    });
  };

  useEffect(() => {
    getDataHome();
  }, []);

  useEffect(() => {
    filterData();
  }, [todos]);

  return (
    <div className="container">
      
      <div className="sidebar">
        <UserDetails />
        <TodoDetails />
        <Logout />
      </div>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/addnewTask" element={<AddNewTask />} />
      </Routes>
    </div>
  );
};

export default Home;
