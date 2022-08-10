import React from "react";

const Navbar = () => {
  return (
    <div data-testid="navbar" style={{display : "flex" , justifyContent:"space-around"}}>
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
