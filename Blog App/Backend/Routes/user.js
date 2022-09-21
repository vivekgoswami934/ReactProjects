const userRouter = require("express").Router();

const { UserModel } = require("../Models/User");

const bcrypt = require("bcrypt");
const { PostModel } = require("../Models/Post");

//Update
userRouter.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//Delete

userRouter.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      try {
        await PostModel.deleteMany({ username: user.username });
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted!!!!!!");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.send(500).json("User not found");
    }
  } else {
    res.status(401).json("You can delete only your account!!!!!!!");
  }
});

//get User

userRouter.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = { userRouter };
