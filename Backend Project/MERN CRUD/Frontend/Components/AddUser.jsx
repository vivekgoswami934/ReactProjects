import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { addUserAPI } from "../service/api";
import { useNavigate, useNavigation } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  > div {
    margin-top: 20px;
  }
`;

const userObject = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(userObject);
  const navigate  = useNavigate()

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const addUserDetails = async () => {
    console.log("1");
    await addUserAPI(user);
    navigate("/all")
    
  };
  return (
    <>
      <Container>
        <Typography variant="h3">AddUser</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone No</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={addUserDetails}   disabled={!localStorage.getItem("curdAppToken")}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
