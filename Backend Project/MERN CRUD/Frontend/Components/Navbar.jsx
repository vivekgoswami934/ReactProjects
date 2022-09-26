import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AllRoutes from "./AllRoutes";

const Header = styled(AppBar)`
  background: #111111;
  display: flex;
  align-items: center;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("curdAppToken");
    navigate("/login");
  };

  // console.log("navbar",localStorage.getItem("curdAppToken"))
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/all">All User</Tabs>
          <Tabs to="/add">Add User</Tabs>
          <Tabs to="/login">
            {localStorage.getItem("curdAppToken") ? (
              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
          </Tabs>
        </Toolbar>
        
      </Header>
    </>
  );
};

export default Navbar;
