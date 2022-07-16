const express = require("express");
const { boardController } = require("../controllers");
const auth = require("../middleware/authHandler");

const router = express.Router();

router.post("/", auth, boardController.createBoard);
router.get("/:boardId", auth, boardController.getBoard);
router.get("/", auth, boardController.getUserBoards);
router.patch("/:boardId", auth, boardController.updateBoard);
router.delete("/:boardId", auth, boardController.deleteBoard);

module.exports = router;
