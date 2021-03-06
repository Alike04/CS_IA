const express = require("express");
const { authController } = require("../controllers");

const route = express.Router();

route.post("/login", authController.login);
route.post("/register", authController.register);

module.exports = route;
