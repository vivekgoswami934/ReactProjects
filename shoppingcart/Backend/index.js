const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.router");
const { authRouter } = require("./Routes/auth.router");

app.use(express.json())


app.use("/api/user", userRouter );
app.use("/api/auth", authRouter );

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DataBase successfully");
  } catch (err) {
    console.log("Failed to connect the db");
    console.log(err);
  }
});

// mongoose
//   .connect(process.env.MONGO_DB_URL)
//   .then(() => console.log("database connected succeessfully"))
//   .catch((err) => console.log(err));
