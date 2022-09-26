import axios from "axios";

const URL = "http://localhost:8080";

const token = localStorage.getItem("curdAppToken");

export const addUserAPI = async (payload) => {
  const token = localStorage.getItem("curdAppToken");
  console.log("getuserapi", token);
  if (token) {
    try {
      console.log("2");
      return await axios.post(`${URL}/add`, payload, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log("Error while calling user api", error);
    }
  } else {
    console.log("you have not login yet add user api");
    alert("token not found please login");
  }
};
export const signupAPI = async (payload) => {
  try {
    console.log(2);
    return await axios.post(`${URL}/auth/signup`, payload);
  } catch (err) {
    console.log("Error while signup sending data at frontend", err);
  }
};
export const signinAPI = async (payload) => {
  try {
    console.log(2);
    return await axios
      .post(`${URL}/auth/login`, payload)
      .then(
        (res) =>
          res.data.token && localStorage.setItem("curdAppToken", res.data.token)
      );
  } catch (err) {
    console.log("Error while login sending data at frontend", err);
  }
};

export const getUserAPI = async () => {
  const token = localStorage.getItem("curdAppToken");
  console.log("getuserapi", token);
  if (token) {
    try {
      return await axios.get(`${URL}/all`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log("Error while the getting the data from api", err);
    }
  } else {
    alert("You have not login yet");
  }
};

export const getOneUser = async (id) => {
  console.log("api", id);
  if (token) {
    try {
      return await axios.get(`${URL}/${id}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(
        "Error while the getting the data of a single user from api",
        err
      );
    }
  } else {
    console.log("get one user error");
  }
};

export const editUserAPI = async (payload, id) => {
  if (token) {
    try {
      return await axios.put(`${URL}/${id}`, payload, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log("Error while calling editUserAPI", err);
    }
  } else {
    console.log("edituser else condition run");
  }
};

export const deleteUserAPI = async (id) => {
  if (token) {
    try {
      console.log("delete");
      return await axios.delete(`${URL}/${id}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(
        "Error while the delteting the data of a single user from api",
        err
      );
    }
  } else {
    console.log("delete else function called");
  }
};
