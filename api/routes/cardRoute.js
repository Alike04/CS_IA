const express = require("express");

const Card = require("../models/Card");
const checkAuth = require("../middleware/check-auth");

const cardRouter = express.Router();

cardRouter.get("/all/:boardId", checkAuth, (req, res, next) => {
  const { board } = req.params;
  Card.find({ boardId: board })
    .exec()
    .then((cards) => {
      if (!cards) {
        res.status(404).json({ message: "There are no cards in this board" });
      }
      res.status(200).json({ cards: cards });
    });
});
cardRouter.get("/card/:cardId", checkAuth, (req, res, next) => {
  const { id } = req.params;
  Card.findById(id)
    .exec()
    .then((card) => {
      if (!card) {
        res.status(404).json({ message: "There is no card by this id" });
      }
      res.status(200).json({ cards: card });
    });
});

cardRouter.post("/", checkAuth, (req, res, next) => {
  const { name, boardId } = req.body;
  Card.find()
    .exec()
    .then(() => {
      const newCard = new Card({ name: name, boardId: boardId });
      newCard
        .save()
        .then((result) => {
          return res.status(200).json({ message: "created new card", result });
        })
        .catch((err) => res.status(500).json(err));
    });
});
cardRouter.delete("/:cardId", checkAuth, (req, res, next) => {
  const cardId = req.params.cardId;
  Card.deleteOne({ _id: cardId })
    .exec()
    .then(() => {
      return res.status(200).json({ message: "deleted successfully" });
    })
    .catch((e) => {
      res.status(401).json(e);
    });
});
cardRouter.patch("/:id", checkAuth, async (req, res, next) => {
  const id = req.params.id;
  const { name, checklists } = req.body;
  try {
    Card.findById(id)
      .exec()
      .then((card) => {
        card.name = name || card.name;
        card.checklists = checklists || card.checklists;
        card.save();

        return res.status(200).json(card);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = cardRouter;
