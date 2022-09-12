const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny"));

// parse request to body parser
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
//   res.send("Crud Application");
 res.render('index')
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} localhost`);
});
