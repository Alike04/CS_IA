const { listService } = require("../services");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const createList = catchAsync(async (req, res) => {
  const list = await listService.createList(req.body);
  res.status(httpStatus.CREATED).json({ list: list });
});
const getList = catchAsync(async (req, res) => {
  const list = await listService.getListById(req.params.listId);
  res.status(httpStatus.OK).json({ list: list });
});
const getListByBoard = catchAsync(async (req, res) => {
  const lists = await listService.getListByBoard(req.body.boardId);
  res.status(httpStatus.OK).json({ lists: lists });
});
const updateList = catchAsync(async (req, res) => {
  await listService.updateList(req.params.listId, req.body);
  res
    .status(httpStatus.OK)
    .json({ message: "List has been updated successfully" });
});
const deleteList = catchAsync(async (req, res) => {
  await listService.deleteList(req.params.listId, req.body);
  res
    .status(httpStatus.OK)
    .json({ message: "List has been deleted successfully" });
});

module.exports = {
  createList,
  getListByBoard,
  getList,
  updateList,
  deleteList,
};
