const express = require("express");

const Board = require("../models/Board");
const List = require("../models/List");
const Card = require("../models/Card");
const checkAuth = require("../middleware/check-auth");
const mongoose = require("mongoose");
const User = require("../models/User");

const boardRoute = express.Router();

boardRoute.post("/", checkAuth, (req, res, next) => {
  const { title } = req.body;
  Board.find()
    .exec()
    .then(() => {
      const newBoard = new Board({
        owner: req.userData._id,
        title: title,
        lists: [],
      });
      newBoard
        .save()
        .then((result) =>
          res.status(201).json({ message: "created new board", result })
        )
        .catch((err) => res.status(500).json(err));
    });
});

boardRoute.get("/:boardId", checkAuth, async (req, res, next) => {
  const id = req.params.boardId;
  Board.findById(id)
    .exec()
    .then((board) => {
      if (!board) {
        return res
          .status(404)
          .json({ message: "Board with a given id is not found" });
      }
      await;
      return res.status(200).json({ details: board });
    });
});

boardRoute.get("/all", checkAuth, async (req, res, next) => {
  var response = { public: {}, private: {} };
  response.public = await Board.find({
    owner: req.userData.id,
    members: { $exists: false },
  }).exec();
  response.private = await Board.find({
    owner: req.userData.id,
    members: { $exists: true },
  }).exec();
  console.log(response);
  if (!response) {
    return res
      .status(404)
      .json({ message: "Boards for this user are not found" });
  }
  return res.status(200).json({ boards: response });
});

module.exports = boardRoute;
