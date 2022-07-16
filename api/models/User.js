const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

userSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({ email: email });
  return user;
};

module.exports = mongoose.model("User", userSchema);
