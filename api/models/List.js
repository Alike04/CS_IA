const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { type: String },
  board: { type: mongoose.SchemaTypes.ObjectId, ref: "boards" },
  cards: [{ type: mongoose.SchemaTypes.ObjectId, ref: "cards" }],
});

module.exports = mongoose.model("lists", listSchema);
