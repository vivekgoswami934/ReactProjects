const { UserModel } = require("../Models/User");

const authRouter = require("express").Router();

const bcrypt = require("bcrypt");

//Registeration
authRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username: username,
      email: email,
      password: hashedpassword,
    });
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

authRouter.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });  
    if(!user) return res.status(400).json("Wrong Credentials!!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    if(!validate) return res.status(400).json("Wrong Credentials!!!");

    const {password , ...other} = user._doc


    res.status(200).json(other)
  } catch (error) {
    res.status(500).json(error);
  }
});

authRouter.post("/login", async (req, res) => {});

module.exports = { authRouter };
