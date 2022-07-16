const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.delete("/delete-all", userController.deleteAllUsers);

module.exports = router;
