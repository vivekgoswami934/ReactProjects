const user = require("../Models/user");

const authRouter = require("express").Router();
const { UserModel } = require("../Models/user");
const CryptoJS = require("crypto-js");

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");

//Register
authRouter.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

authRouter.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) return res.status(401).json("User not found Wrong Credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );

    const passsword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (passsword !== req.body.password)
      return res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({user, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = { authRouter };

// var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
// ​
// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
