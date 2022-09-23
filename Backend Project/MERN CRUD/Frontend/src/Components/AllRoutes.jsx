import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import AllUser from "./AllUser";
import EditUser from "./EditUser";
import SIgnin from "./SIgnin";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SIgnin />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
