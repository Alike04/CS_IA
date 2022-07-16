const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAll();
  res.status(httpStatus.OK).json(users);
});

const deleteAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAll();
  users.forEach((user) => {
    userService.deleteUser(user._id);
  });
  res.status(httpStatus.OK).send("IT IS OK");
});

module.exports = { getAllUsers, deleteAllUsers };
