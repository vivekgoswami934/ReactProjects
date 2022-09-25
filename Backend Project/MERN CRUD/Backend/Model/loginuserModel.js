const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const authModel = mongoose.model("authuserdata", authSchema);



module.exports = { authModel };
