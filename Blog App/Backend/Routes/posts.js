const { Router } = require("express");
const { PostModel } = require("../Models/Post");

const postRouter = require("express").Router();

//Create Post :----->
postRouter.post("/create", async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update post :----->
postRouter.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    console.log(post);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post :-->
postRouter.delete("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    //   console.log(post);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Post :==>

postRouter.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all post :==>

postRouter.get("/", async (req, res) => {
  const username = req.query.user;
  const categoriesName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await PostModel.find({ username });
    } else if (categoriesName) {
      posts = await PostModel.find({ categories: { $in: [categoriesName] } });
    } else {
        console.log("dfhaiudhfiuahdfiadai")
      posts = await PostModel.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = { postRouter };
