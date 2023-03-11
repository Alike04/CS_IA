const { Board } = require("../models");
const httpStatus = require("http-status");
const {
  getListByBoard: getListsByBoard,
  deleteList,
} = require("./listService");
const { getUserById } = require("./userService");
const ApiError = require("../utils/ApiError");

const createBoard = async (user, boardBody) => {
  boardBody.owner = user._id;
  return await Board.create(boardBody);
};
const getAllBoards = async () => {
  boards = Board.find({});
  return boards;
}
const getBoardsByUser = async (userId) => {
  return Board.find({ member: userId });
};
const getBoardById = async (boardId) => {
  const board = await Board.findById(boardId).lean().exec();
  if (!board) {
    throw new ApiError(httpStatus.NOT_FOUND, "board is not found");
  }
  return board;
};
const updateBoard = async (boardId, boardBody) => {
  const board = await Board.findById(boardId);
  Object.assign(board, boardBody);
  await board.save();
  return board;
};
const deleteBoard = async (boardId) => {
  const board = await getBoardById(boardId);
  if (!board) {
    throw new ApiError(httpStatus.NOT_FOUND, "Board is not found");
  }
  const lists = getListsByBoard(boardId);
  Array.from(lists).forEach((list) => {
    deleteList(boardId, list._id);
  });
  await board.remove();
  return board;
};
module.exports = {
  createBoard,
  getBoardById,
  getBoardsByUser,
  updateBoard,
  deleteBoard,
  getAllBoards
};
