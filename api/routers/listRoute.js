const express = require("express");
const auth = require("../middleware/authHandler");
const { listController } = require("../controllers");

const listRouter = express.Router();

listRouter
  .post("/", auth, listController.createList)
  .get("/", auth, listController.getListByBoard)
  .get("/boardId", auth, listController.getList)
  .delete("/", auth, listController.deleteList)
  .patch("/", auth, listController.updateList);

module.exports = listRouter;
