import axios from "axios";

const URL = "http://localhost:8080";

export const addUserAPI = async (payload) => {
  try {
    console.log("2");
    return await axios.post(`${URL}/add`, payload);
  } catch (error) {
    console.log("Error while calling user api", error);
  }
};

export const getUserAPI = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (err) {
    console.log("Error while the getting the data from api", err);
  }
};

export const getOneUser = async (id) => {
  console.log("api", id);
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (err) {
    console.log(
      "Error while the getting the data of a single user from api",
      err
    );
  }
};

export const editUserAPI = async (payload, id) => {
  console.log("payload", payload, id);
  try {
    return await axios.put(`${URL}/${id}`, payload);
  } catch (err) {
    console.log("Error while calling editUserAPI", err);
  }
};

export const deleteUserAPI = async (id) => {
  try {
    console.log("delete")
    return await axios.delete(`${URL}/${id}`);
  } catch (err) {
    console.log(
      "Error while the delteting the data of a single user from api",
      err
    );
  }
};
