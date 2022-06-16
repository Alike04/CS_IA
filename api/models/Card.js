const mongoose = require("mongoose");

const checklistSchema = new mongoose.Schema({
  name: { type: String },
  isDone: { type: Boolean },
});

const cardSchema = new mongoose.Schema({
  name: { type: String },
  deadline: { type: String },
  checklists: [checklistSchema],
});

module.exports = mongoose.model("cards", cardSchema);
