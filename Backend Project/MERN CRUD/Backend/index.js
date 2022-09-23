const express = require("express");
const { connection } = require("./Config/db");
const { router } = require("./Routes/routes");
const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`database is connected successfully on port ${PORT}`);
  } catch (err) {
    console.log("error while connecting db", err);
  }
});
