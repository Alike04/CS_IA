const express = require("express");

const Board = require("../models/Board");
const mongoose = require("mongoose");

const boardRouter = express.Router();

boardRouter.post("/", (req, res, next) => {
  const { title } = req.body;
  Board.find()
    .exec()
    .then(() => {
      const newBoard = new Board({
        owner: req.userData.id,
        title: title,
        lists: [],
      });
      newBoard
        .save()
        .then((result) =>
          res.status(200).json({ message: "created new board", result })
        )
        .catch((err) => res.status(500).json(err));
    });
});

boardRouter.get("/board/:boardId", (req, res, next) => {
  const { id } = req.params.boardId;
  Board.findById(id)
    .exec()
    .then((board) => {
      if (!board) {
        return res
          .status(404)
          .json({ message: "Board with a given id is not found" });
      }
      return res.status(200).json({ details: board });
    });
});

boardRouter.get("/all", (req, res, next) => {
  var response;
  response.public = Board.find({
    owner: req.userData.id,
    members: { $exists: false },
  });
  response.private = Board.find({
    owner: req.userData.id,
    members: { $exists: true },
  });
  if (!response) {
    return res
      .status(404)
      .json({ message: "Boards for this user are not found" });
  }
  return res.status(200).json({ boards: response });
});

module.exports = boardRouter;
