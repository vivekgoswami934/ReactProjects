import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteUserAPI, getUserAPI } from "../service/api";

const TableContainer = styled(Table)`
  width: 80%;
  margin: 30px auto 0px auto;
`;
const H1 = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Row = styled(TableRow)`
  background-color: teal;
  & > th {
    color: whitesmoke;
    font-size: 20px;
  }
`;
const TRow = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

const AllUser = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(!loading);
      const res = await getUserAPI();
      setLoading((loading) => !loading);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (id) => {
    await deleteUserAPI(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {console.log(loading)}
      {loading && <H1 variant="h1">Loading...</H1>}
      <TableContainer>
        <TableHead>
          <Row>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>PhoneNo</TableCell>
            <TableCell></TableCell>
          </Row>
        </TableHead>
        <TableBody>
          {data?.map((user, id) => (
            <TRow key={user._id}>
              <TableCell> {id + 1} </TableCell>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.username} </TableCell>
              <TableCell> {user.email} </TableCell>
              <TableCell> {user.phone} </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: "12px" }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default AllUser;
