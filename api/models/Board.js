const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  name: { type: String },
  members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Board", boardSchema);
