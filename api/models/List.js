const { default: mongoose } = require("mongoose");

const listSchema = mongoose.Schema({
  name: { type: String, required: true },
  boardId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Board",
    required: true,
  },
});

module.exports = mongoose.model("List", listSchema);
