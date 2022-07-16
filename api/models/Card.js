const { default: mongoose } = require("mongoose");

const checkListSchema = mongoose.Schema({
  name: { type: String, required: true },
  isDone: { type: Boolean, required: true },
});

const cardScheme = mongoose.Schema({
  name: { type: String, required: true },
  checkLists: checkListSchema,
  listId: { type: String, required: true },
});

module.exports = mongoose.model("Card", cardScheme);
