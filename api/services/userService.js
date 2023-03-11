const httpStatus = require("http-status");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User is not found");
  }
  return user;
};
const getUserById = async (id) => {
  return User.findById(id);
};
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "email has be already taken");
  }
  const user = await User.create(userBody);
  return user;
};
const getAll = async () => {
  return User.find();
};
const updateUser = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User is not found");
  }
  if (await User.isEmailTaken(updateBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is already taken");
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};
const deleteUser = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User is not found");
  }
  await user.remove();
  return user;
};

module.exports = {
  getUserByEmail,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
  getAll,
};
