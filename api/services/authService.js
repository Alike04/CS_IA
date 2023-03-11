const jwt = require("jsonwebtoken");
const { userService } = require("./index");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const { getUserByEmail, getUserById } = require("./userService");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

require("dotenv").config();

const register = async (userBody) => {
  let password = userBody.password;
  password = await bcrypt.hash(password, 10);
  userBody.password = password;
  const user = await userService.createUser(userBody);
  return user;
};
const login = async (email, password) => {
  const user = await getUserByEmail(email);
  const result = await bcrypt.compare(password, user.password);
  if (result) {
    return user;
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Authorization fail");
  }
};
const authenticate = async (token) => {
  if (!token || token === null) {
    throw new ApiError(httpStatus, "Authenticate again");
  }
  let result = jwt.verify(token, process.env.SECRET);
  const { userId } = result;
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Authentication is failed");
  }
  return user;
};



module.exports = { register, login, authenticate };
