const express = require("express");
const { authController } = require("../controllers");
const { body, validationResult } = require('express-validator');

const route = express.Router();

route.post("/login", authController.login);
route.post("/register", authController.register);
route.post("/auth", authController.authenticate);

module.exports = route;
