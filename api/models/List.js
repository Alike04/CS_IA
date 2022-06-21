const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { type: String },
  boardId: { type: mongoose.SchemaTypes.ObjectId, ref: "boards" },
  cards: [{ type: mongoose.SchemaTypes.ObjectId, ref: "cards" }],
});

module.exports = mongoose.model("lists", listSchema);
