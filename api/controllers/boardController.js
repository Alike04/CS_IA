const { boardService, userService } = require("../services");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const createBoard = catchAsync(async (req, res) => {
  const board = await boardService.createBoard(req.userData, req.body);
  res.status(httpStatus.CREATED).json({ board: board });
});
const getBoard = catchAsync(async (req, res) => {
  const boards = await boardService.getBoardById(req.params.boardId);
  res.status(httpStatus.OK).json({ boards: boards });
});
const getUserBoards = catchAsync(async (req, res) => {
  const boards = await boardService.getBoardsByUser(req.userData._id);
  res.status(httpStatus.OK).json({ boards: boards });
});
const updateBoard = catchAsync(async (req, res) => {
  await boardService.updateBoard(req.params.boardId, req.body);
  res.status(httpStatus.OK).json({ message: "Board is updated successfully" });
});
const deleteBoard = catchAsync(async (req, res) => {
  await boardService.deleteBoard(req.params.boardId);
  res.status(httpStatus.OK).json({ message: "Board is deleted successfully" });
});

module.exports = {
  createBoard,
  getBoard,
  getUserBoards,
  updateBoard,
  deleteBoard,
};
