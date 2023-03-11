const httpStatus = require("http-status");
const { Card } = require("../models");
const { List } = require("../models");
const ApiError = require("../utils/ApiError");

const createCard = async (cardBody) => {
  const newCard = await Card.create(cardBody);
  return newCard;
};
const getCardById = async (cardId) => {
  const card = Card.findById(cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, "Card is not found");
  }
  return card;
};
const getCardsByList = async (listId) => {
  const cards = await Card.find({ listId: listId });
  if (!cards) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  return cards;
};
const getAll = async () => {
  const cards = await Card.find()
  return cards;
}
const updateCard = async (cardId, updateBody) => {
  const card = await Card.findById(cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, "Card is not found");
  }
  Object.assign(card, updateBody);
  await card.save();
  return card;
};
const deleteCard = async (cardId) => {
  const card = await getCardById(cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, "Card is not found");
  }
  await card.remove();
};

module.exports = {
  getCardById,
  getCardsByList,
  createCard,
  updateCard,
  deleteCard,
  getAll
};
