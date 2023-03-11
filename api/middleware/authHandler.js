const { userService } = require("../services");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token || token === null) {
      throw new ApiError(httpStatus, "Authenticate again");
    }
    const result = jwt.verify(token, process.env.SECRET);
    const { userId } = result;
    const user = await userService.getUserById(userId);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Authentication is failed");
    }
    req.userData = user;
    next();
  } catch (e) {
    res.status(httpStatus.UNAUTHORIZED).send(e);
  }
};

module.exports = auth;
