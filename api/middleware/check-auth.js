const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const { id } = decoded;
    User.findById(id)
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "no user found" });
        }
        req.userData = user;
        return next();
      });
  } catch (error) {
    res.status(401).json({ message: "fail" });
    throw error;
  }
};

module.exports = checkAuth;
