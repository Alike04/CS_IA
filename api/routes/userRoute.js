const express = require("express");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password, name } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (user) {
        res
          .status(400)
          .json({ message: "User with this email already exists" });
      } else {
        const newUser = new User(name, email, password);
        bcrypt.hash(password, 10).then((hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.status(201).json(user))
            .catch((error) => req.status(500).json(error));
        });
      }
    })
    .catch((error) => res.status(500).json(error));
});

userRouter.post("/login", (req, res, next) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    const user = User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).json({ message: "auth failed" });
    }
    const result = bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        process.env.SECRET,
        {
          expiresIn: "10h",
        }
      );
      return res.status(200).json({ message: "Auth success", token });
    }
    res.status(401).json({ message: "Auth failed" });
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = userRouter;
