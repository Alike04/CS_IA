const { authService, tokenService } = require("../services/index");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res, next) => {
  const user = await authService.register(req.body);
  const token = tokenService.generateToken(user);
  return res.status(200).send({ user: user, token: token });
});
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.login(email, password);
  const token = tokenService.generateToken(user);
  return res.status(httpStatus.OK).json({ user: user, token: token });
});

module.exports = { register, login };
