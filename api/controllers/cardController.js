const { cardService } = require("../services");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const createCard = catchAsync(async (req, res) => {
  const card = await cardService.createCard(req.body);
  res.status(httpStatus.CREATED).json({ card: card });
});
const getCard = catchAsync(async (req, res) => {
  const card = await cardService.getCardById(req.params.cardId);
  res.status(httpStatus.OK).json({ card: card });
});
const getCardByList = catchAsync(async (req, res) => {
  const card = await cardService.getCardsByList(req.params.listId);
  res.status(httpStatus.OK).json({ cards: card });
});
const updateCard = catchAsync(async (req, res) => {
  await cardService.updateCard(req.body._id, req.body);
  res
    .status(httpStatus.NO_CONTENT)
    .json({ message: "Card is updated successfully" });
});
const getToday = catchAsync(async (req, res) => {
  const cards = await cardService.getAll();
  res.status(httpStatus.OK).json({ cards: cards })
})
const deleteCard = catchAsync(async (req, res) => {
  const card = await cardService.deleteCard(req.params.cardId);
  res
    .status(httpStatus.NO_CONTENT)
    .json({ message: "Card is deleted successfully" });
});

module.exports = {
  createCard,
  getCard,
  getCardByList,
  updateCard,
  getToday,
  deleteCard,
};
