const express = require("express");
const checkAuth = require("../middleware/check-auth");
const mongoose = require("mongoose");
const List = require("../models/List");
const Board = require("../models/Board");

listRouter = express.Router();

listRouter.get("/all/:boardId", checkAuth, (req, res, next) => {
  const boardId = req.params.boardId;

  List.find({ boardId: boardId })
    .exec()
    .then((lists) => {
      if (!lists) {
        return res.status(404).json({ message: "no lists were found" });
      }
      return res.status(200).json(lists);
    });
});

listRouter.post("/", checkAuth, async (req, res, next) => {
  try {
    const { name, boardId } = req.body;
    await Board.find(boardId).exec();
    await List.find().exec();
    const newList = new List({
      name: name,
      boardId: boardId,
    });
    const listResult = newList.save();
    const board = await Board.findById(boardId).exec();
    if (!board) {
      return res
        .status(404)
        .json({ message: "no boards were found by this id" });
    }
    const listsList = Array.from(board.lists);
    listsList.push(listResult._id);
    board.set({ lists: listsList });
    const boardResult = await board.save();

    return res.status(201).json({
      list: listResult,
      board: boardResult,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

listRouter.delete("/:listId", checkAuth, (req, res, next) => {
  const id = req.params.listId;
  List.deleteOne({ _id: id })
    .exec()
    .then(() => {
      return res
        .status(200)
        .json("list by " + id + " id is deleted successfully");
    })
    .catch((e) => res.status(500).json(e));
});

listRouter.patch("/:listId", checkAuth, (req, res, next) => {
  const id = req.params.listId;
  const { name } = req.body;
  try {
    List.findById(id)
      .exec()
      .then((list) => {
        list.name = name || list.name;
        list.save();

        return res.status(200).json(list);
      });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = listRouter;
