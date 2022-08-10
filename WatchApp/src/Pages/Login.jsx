import React from "react";

const Login = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
