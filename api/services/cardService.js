const httpStatus = require("http-status");
const { Card } = require("../models");
const { getListById } = require("./listService");
const ApiError = require("../utils/ApiError");

const createCard = async (listId, cardBody) => {
  const list = await getListById(listId);
  if (!list) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  const cards = Array.from(list.cards);
  const newCard = await Card.create(cardBody);
  cards.push(newCard);
  list.set({ cards: cards });
  list.save();
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
  const list = await getListById(listId);
  if (!list) {
    throw new ApiError(httpStatus.NOT_FOUND, "List is not found");
  }
  return list.cards;
};
const updateCard = async (cardId, updateBody) => {
  const card = Card.findById(cardId);
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
};
