import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { signinAPI, signupAPI } from "../service/api";
import { useNavigate } from "react-router-dom";

const signupObj = {
  username: "",
  password: "",
  email: "",
};
const loginObj = {
  username: "",
  password: "",
};

const Login = () => {
  const imageURL =
    "https://previews.123rf.com/images/aaamie/aaamie1607/aaamie160700024/60230534-access-management-authorize-software-authentication-login-form-system-vector-illustration.jpg";

  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupObj);
  const [signin, setSignin] = useState(loginObj);

  const navigate = useNavigate();

  const onChangeSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  };
  const onChangeSignin = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
    // console.log(signin);
  };

  const onClickSignup = () => {
    console.log("signup", 1);
    signupAPI(signup);
    console.log("Signup succesfully");
    alert("Signup successful");
    toggleSignUp();
    // setSignup({...signup , username: "", password: "", email: "" });
    window.location.reload();
  };
  const onClickLogin = () => {
    console.log("login");
    signinAPI(signin);
    setTimeout(() => {
      navigate("/all");
    }, 500);

    setTimeout(() => {
      window.location.reload();
    }, 510);
  };

  const toggleSignUp = () => {
    setAccount(account === "login" ? "signup" : "login");
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              required
              variant="standard"
              label="Enter Username"
              name="username"
              onChange={(e) => onChangeSignin(e)}
            />
            <TextField
              required
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={(e) => onChangeSignin(e)}
            />
            <LoginButton
              variant="contained"
              onClick={onClickLogin}
              disabled={localStorage.getItem("curdAppToken")}
            >
              Login
            </LoginButton>
            <Text>OR</Text>
            <SignupButton
              onClick={() => toggleSignUp()}
              disabled={localStorage.getItem("curdAppToken")}
            >
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter Name"
              name="name"
              onChange={(e) => onChangeSignup(e)}
            />
            <TextField
              variant="standard"
              label="Enter Username"
              name="username"
              onChange={(e) => onChangeSignup(e)}
            />
            <TextField
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={(e) => onChangeSignup(e)}
            />
            <SignupButton onClick={onClickSignup}>Signup</SignupButton>
            <Text>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignUp()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  /* margin-top: 30px; */
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & button,
  & p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: white;
  height: 40px;
  border-radius: 5px;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 60%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 17px;
  text-align: center;
`;
