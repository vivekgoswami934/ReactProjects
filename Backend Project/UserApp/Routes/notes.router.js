const notesController = require("express").Router();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { authentication } = require("../middleware/authentication");
const { NoteModel } = require("../Models/notes.module");

require("dotenv").config();

notesController.get("/", authentication, async (req, res) => {
  const notes = await NoteModel.find({ userId: req.body.userId });
  res.send(notes);
});

notesController.post("/create", async (req, res) => {
  const { Heading, Note, Tag, userId } = req.body;
  const note = new NoteModel({
    Heading,
    Note,
    Tag,
    userId,
  });
  try {
    await note.save();
    res.send("Notes created");
  } catch (error) {
    res.send("Something error");
  }
});

notesController.delete("/delete/:noteId", async (req, res) => {
  const { noteId } = req.params;

  console.log(noteId);
  try {
    const deleteNode = await NoteModel.findOneAndDelete({
      _id: noteId,
      userId: req.body.userId,
    });

    if (deleteNode) res.status(200).json("Successfully deleted");
    else res.send("You can only delete only your post || could not deleted");
  } catch (error) {
    res.send("something very weired happend at delete");
  }
});

//patch
notesController.patch("/edit/:noteId", async (req, res) => {

  const { noteId } = req.params;
  try {
    const deleteNode = await NoteModel.findOneAndUpdate(
      { _id: noteId, userId: req.body.userId },
      { ...req.body }
    );

    if (deleteNode) res.status(200).json("Patched the data");
    else res.send("Not Patched something error or you can post only your post");
  } catch (err) {}
});

module.exports = { notesController };
