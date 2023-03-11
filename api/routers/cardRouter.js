const express = require("express");
const { cardRoute } = require(".");
const { cardController } = require("../controllers");
const auth = require("../middleware/authHandler");

const cardRouter = express.Router();

cardRouter
  .post("/", auth, cardController.createCard)
  .get("/", auth, cardController.getCardByList)
  .get("/cardId", auth, cardController.getCard)
  .get("/today", auth, cardController.getToday)
  .delete("/:cardId", auth, cardController.deleteCard)
  .patch("/", auth, cardController.updateCard);

module.exports = cardRouter;
