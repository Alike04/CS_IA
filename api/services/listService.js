const httpStatus = require("http-status");
const { List } = require("../models");
const { getBoardById } = require("./boardService");
const { getCardsByList, deleteCard } = require("./cardService");
const ApiError = require("../utils/ApiError");

const getListById = async (listId) => {
  const list = await List.findById(listId);
  if (!list) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  return list;
};
const getListsByBoard = async (boardId) => {
  const lists = List.find({ boardId: boardId }).lean().exec();
  return lists
};
const createList = async (listBody) => {
  return await List.create(listBody);
};
const updateList = async (listId, updateBody) => {
  const list = await getListById(listId);
  if (!list) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  Object.assign(list, updateBody);
  await list.save();
  return list;
};
const deleteList = async (listId) => {
  const list = await getListById(listId);
  if (!list) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  Array.from(getCardsByList(listId)).forEach((card) => {
    deleteCard(card._id, listId);
  });
  return list.remove();
};

module.exports = {
  getListByBoard: getListsByBoard,
  getListById,
  updateList,
  deleteList,
  createList,
};
