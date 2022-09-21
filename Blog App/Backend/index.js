const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connection } = require("./Config/db");
const { authRouter } = require("./Routes/auth");
const { userRouter } = require("./Routes/user");
const { postRouter } = require("./Routes/posts");
dotenv.config();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(5000, async () => {
  try {
    await connection;
    console.log("Connected to mongoDb");
  } catch (error) {
    console.log(error);
  }

  //   console.log("Backend is running");
});
