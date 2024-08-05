const express = require("express");
const router = express.Router();

const controller = require("../controllers/messageController");

router.post("/new", controller.postMessage);

module.exports = router;
