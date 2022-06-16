const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: { type: String },
  board: { type: mongoose.SchemaTypes.ObjectId, ref: "boards" },
  cards: [{ type: mongoose.SchemaTypes.ObjectId, ref: "cards" }],
});
