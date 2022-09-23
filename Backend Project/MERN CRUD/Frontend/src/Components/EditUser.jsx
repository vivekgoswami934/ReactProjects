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
import { editUserAPI, getOneUser } from "../service/api";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useEffect } from "react";

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

const EditUser = () => {
  const [user, setUser] = useState(userObject);
  const navigate = useNavigate();
  const { id } = useParams();

  const loadUserDetails = async () => {
    const res = await getOneUser(id);
    console.log("function", res.data);
    setUser(res.data);
  };
  useEffect(() => {
    loadUserDetails();
    console.log("usereffet", user);
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    console.log("1");
    await editUserAPI(user,id);
    navigate("/");
  };

  return (
    <>
      <Container>
        {console.log("user",user)}
        <Typography variant="h3">Update User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone No</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={editUserDetails}>
            Update User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
