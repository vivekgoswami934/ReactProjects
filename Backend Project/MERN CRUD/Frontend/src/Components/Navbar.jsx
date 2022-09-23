import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">All User</Tabs>
          <Tabs to="/add">Add User</Tabs>
          <Tabs to="/signin">Login</Tabs>
          <Tabs to="/signup">Signup</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
