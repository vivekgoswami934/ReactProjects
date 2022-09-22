const express = require("express");
const { connection } = require("./Config/db");
const { authentication } = require("./middleware/authentication");
const { notesController } = require("./Routes/notes.router");
const { userController } = require("./Routes/user.router");

const PORT = 8080;

const app = express();

app.use(express.json());

app.use("/user", userController);

app.use(authentication);

app.use("/notes", notesController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
});
