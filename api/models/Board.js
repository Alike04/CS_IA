const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  members: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
  ],
  title: { type: String, required: true },
  lists: [{ type: String, required: true }],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  openedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("boards", BoardSchema);
