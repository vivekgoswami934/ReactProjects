const userController = require("express").Router();
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

userController.post("/signup", async (req, res) => {
  const { age, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      age: age,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

userController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json("Wrong Credentials");

    const validate = await bcrypt.compare(password, user.password);

    if (!validate) return res.status(400).json("Wrong Password");

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = { userController };
