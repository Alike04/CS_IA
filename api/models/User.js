const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  boards: [{ type: mongoose.SchemaTypes.ObjectId, ref: "boards" }],
});

module.exports = mongoose.model("users", userSchema);
