import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import AllUser from "./AllUser";
import EditUser from "./EditUser";
import Login from "./Login";
import Navbar from "./Navbar";

const AllRoutes = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
