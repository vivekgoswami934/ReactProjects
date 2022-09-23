const {
  addUser,
  getUSer,
  getOneUser,
  editUser,
  deleteUser,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/add", addUser);
router.get("/all", getUSer);
router.get("/:id", getOneUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = { router };
